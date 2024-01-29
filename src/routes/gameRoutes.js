//gameRoutes.js

const express = require('express');
const router = express.Router();
const SparkMD5 = require('spark-md5'); // Import SparkMD5 library

const { fetchTilesData, fetchClassicCounterValue, fetchLevelsData, fetchAchievementsData} = require('../db/queries.js');


router.post('/get-tiles', async (req, res) => {
	try {
		const tilesData = await fetchTilesData();
		const hash = calculateHash(tilesData);
        res.json({ data: tilesData, hash });	
	} catch (error) {
		console.error('Error fetching Tiles Data:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

router.post('/get-counter', async (req, res) => {
	try {
		const results = await fetchClassicCounterValue();
		res.json(results);
	} catch (error) {
		console.error('Error fetching counter value:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

router.post('/get-levels', async (req, res) => {
	try {
		const results = await fetchLevelsData();
		const hash = calculateHash(results);
        res.json({ data: results, hash });
	} catch (error) {
		console.error('Error fetching level data: ', error);
		res.status(500).json({error: 'Internal server error'});
	}
});
router.post('/get-achievements', async (req, res) => {
	try {
		const results = await fetchAchievementsData();
		const hash = calculateHash(results);
        res.json({ data: results, hash });
	} catch (error) {
		console.error('Error fetching achievement data: ', error);
		res.status(500).json({error: 'Internal server error'});
	}
});
function calculateHash(data) {
    return SparkMD5.hash(JSON.stringify(data));
}
module.exports = router;
