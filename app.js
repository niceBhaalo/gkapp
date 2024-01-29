require('dotenv').config();

require('./config/passport-config.js');

const https = require('https');
const http = require('http');

const express = require('express');
const path = require('path');
const fs = require('fs');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./src/routes/authRoutes.js');
const gameRoutes = require('./src/routes/gameRoutes.js');


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

serverhttp.listen(80, () => {
	console.log('http Server running on 80');
});

const corsOptions = {
    origin: ['https://www.fazeelptapp.com', 'http://www.fazeelptapp.com'],
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
        next();
        console.log('not redirected');
    } else {
        console.log('redirected');
        res.redirect(301, 'https://' + req.headers.host + req.url);
    }
});

app.use(cookieParser());

app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_ID_SECRET,
    resave: false,
    saveUninitialized: true,
	cookie: {secure: false}
  }));
  
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	const filePath = path.join(rootDir, 'public', 'index.html');
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.status(404).send('404 Not Found This');
		} else {
			res.setHeader('Content-Type', 'text/html');
			res.status(200).send(data);
		}
	});
});

app.use('/auth', authRoutes);
app.use('/', gameRoutes);
