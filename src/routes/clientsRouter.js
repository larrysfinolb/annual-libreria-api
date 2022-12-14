const express = require('express');
const services = require('../services/clientsServices');

const router = express.Router();

router.post('/get-all', async (req, res) => {
	try {
		const result = await services.getAll(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: `${error}` });
	}
});

router.post('/create', async (req, res) => {
	try {
		const result = await services.create(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: `${error}` });
	}
});

router.post('/update', async (req, res) => {
	try {
		const result = await services.update(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: `${error}` });
	}
});

router.post('/delete', async (req, res) => {
	try {
		const result = await services.delete_(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: `${error}` });
	}
});

module.exports = router;
