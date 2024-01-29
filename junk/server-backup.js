require('dotenv').config();
const https = require('https');
const http = require('http');

const express = require('express');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2/promise'); // Import the promise-based version of mysql2
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./passport-config.js');

const app = express();
const port = process.env.PORT;

const rootDir = __dirname;
const options = {
  key: fs.readFileSync(path.join(rootDir, process.env.SSL_PEM_PATH)),    
  cert: fs.readFileSync(path.join(rootDir, process.env.SSL_CERT_PATH)),    
  passphrase: process.env.SSL_PASSPHRASE   
};
const serverhttps = https.createServer(options, app);
const serverhttp = http.createServer(app);


serverhttps.listen(port, () => {
	console.log(`Server is running on ${port}`);
});

serverhttp.listen(5000, () => {
	console.log('http Server running on 5000');
});
const corsOptions = {
    origin: ['https://mycustomdomain.com', 'http://mycustomdomain.com'],
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.static(rootDir));
app.use(session({
    secret: process.env.SESSION_ID_SECRET,
    resave: false,
    saveUninitialized: true,
	cookie: {secure: false}
  }));

  
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	const filePath = path.join(rootDir, process.env.ROOT_URL);
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.status(404).send('404 Not Found This');
		} else {
			res.status(200).send(data);
		}
	});
});



const dbPool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	connectionLimit: 10, 
});

app.get('/get-counter', async (req, res) => {
	try {
		const connection = await dbPool.getConnection();
		const counterValue = await fetchClassicCounterValue(connection);
		connection.release();
		res.json({ value: counterValue });
	} catch (error) {
		console.error('Error fetching counter value:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});
async function fetchClassicCounterValue(connection) {
	try {
		await connection.beginTransaction();
		const [rows] = await connection.query('SELECT value FROM classicCounter WHERE id = ? FOR UPDATE', ['counter']);
		if (rows.length > 0) {
			const currentValue = rows[0].value;
			const newValue = parseInt(currentValue) + 1;
			await connection.query('UPDATE classicCounter SET value = ? WHERE id = ?', [newValue, 'counter']);
			await connection.commit();
			return newValue;
		} else {
			return null; 
		}
	} catch (error) {
		await connection.rollback();
		throw error;
	}
}

app.get('/get-tiles', async (req, res) => {
	try {
		const connection = await dbPool.getConnection();
		const tilesData = await fetchTilesData(connection);
		connection.release();
		res.json(tilesData);
	} catch (error) {
		console.error('Error fetching Tiles Data:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

async function fetchTilesData(connection) {
	try {
		const tableName = 'elementdatatable';
		await connection.beginTransaction();
		const [results] = await connection.query(`SELECT * FROM ${tableName}`);
		await connection.commit();
		return results;
	} catch (error) {
		await connection.rollback();
		throw error;
  }
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/failed'); // Redirect to a failure page if not authenticated
}

app.get("/home", (req, res) => {
    res.send("Home Page")
})
app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile'],
        }
));

app.get('/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res, next) {
        if (req.user) {
			console.log('Doing');
            res.redirect('/success');
        } else {
            console.log('Authentication failed');
            res.redirect('/failed');
        }
    }
);

app.get("/failed", (req, res) => {
    console.log('User is not authenticated');
    res.send("Failed")
})

app.get("/success",isLoggedIn, (req, res) => {
    console.log('You are logged in');
    res.send(`Welcome ${req.user.displayName}`)
})

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error while destroying session:', err);
        } else {
            req.logout(() => {
                console.log('You are logged out');
                res.redirect('/home');
            });
        }
    });
});

