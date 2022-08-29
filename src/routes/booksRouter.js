const express = require('express');
const services = require('../services/booksService');

const router = express.Router();

router.post('/crear', async (req, res) => {
	try {
		const result = await services.crear(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});
  
router.post('/editar', async (req, res) => {
	try {
		const result = await services.editar(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});


router.post('/eliminar', async (req, res) => {
	try {
		const result = await services.eliminar(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});


module.exports = router;
