const express = require('express');
const services = require('../services/profileService');

const router = express.Router();

router.post('/login-saint', async (req, res) => {
	try {
		const result = await services.loginSaint(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: `${error}` });
	}
});

module.exports = router;
