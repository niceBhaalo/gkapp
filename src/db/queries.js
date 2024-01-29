const pool = require('./dbPool.js');

async function fetchTilesData() {
	const connection = await pool.getConnection();
	try {
		const tableName = 'elementdatatable';
		const [results] = await connection.query(`SELECT * FROM ${tableName}`);
		return results;
	} catch (error) {
		throw error;
	} finally {
		if (connection) {
			connection.release();
		}
	}
}
async function fetchLevelsData() {
	const connection = await pool.getConnection();
	try {
		const tableName = 'game_levels';
		const [results] = await connection.query(`SELECT * FROM ${tableName} ORDER BY display_order`);
		return results;
	} catch (error) {
		throw error;
	} finally {
		if (connection) {
			connection.release();
		}
	}
}
async function fetchAchievementsData() {
	const connection = await pool.getConnection();
	try {
		const tableName = 'achievements';
    const [results] = await connection.query(`SELECT * FROM ${tableName} ORDER BY display_order`);
		return results;
	} catch (error) {
		throw error;
	} finally {
		if (connection) {
			connection.release();
		}
	}
}

async function fetchClassicCounterValue() {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const [rows] = await connection.query('SELECT id, value FROM classicCounter FOR UPDATE');
        let counterValue = null;
        let versionValue = null;

        for (const row of rows) {
            if (row.id === 'counter') {
            counterValue = parseInt(row.value);
            } else if (row.id === 'version') {
            versionValue = row.value;
            }
        }
        if (counterValue === null) {
            counterValue = 1;
        }
        else {
            counterValue = parseInt(counterValue) + 1;
        }
        await connection.query('UPDATE classicCounter SET value = ? WHERE id = ?', [counterValue, 'counter']);
        await connection.commit();
        return { counter: counterValue, version: versionValue };
    } catch (error) {
	    await connection.rollback();
	    throw error;
    } finally {
	    if (connection) {
		    connection.release();
	    }
    }
}

async function checkUserExists(userID) {
    try {
        const connection = await pool.getConnection();
        try {
            const query = 'SELECT * FROM users WHERE user_id = ?';
            const [rows] = await connection.query(query, [userID]);
            return rows.length > 0; // If rows.length > 0, a user with the given UserID exists
        } finally {
            connection.release();
        }
    } catch (error) {
        throw error;
    }
}

async function populateUser(newUser) { // Accept the `newUser` object as a parameter
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Check if the user already exists
        const userExists = await checkUserExists(newUser.user_id);
        console.log('User Exists', userExists);
        if (userExists) {
            // Update the existing user's information based on the `newUser` object
            const updateQuery = 'UPDATE users SET display_name = ?, email = ? WHERE user_id = ?';
            await connection.query(updateQuery, [newUser.display_name, newUser.email, newUser.user_id]);
        } else {
            // Create a new user entry if the user doesn't exist
            const insertQuery = 'INSERT INTO users (user_id, display_name, email) VALUES (?, ?, ?)';
            await connection.query(insertQuery, [newUser.user_id, newUser.display_name, newUser.email]);
        }
        await connection.commit();
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}


module.exports = {
	fetchTilesData,
	fetchClassicCounterValue,
	checkUserExists,
	populateUser,
    fetchLevelsData,
    fetchAchievementsData,
};