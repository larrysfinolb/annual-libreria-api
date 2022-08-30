const express = require('express');
const services = require('../services/booksService');

const router = express.Router();

router.post('/crear_C', async (req, res) => {
	try {
		const result = await services.crear_C(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});
  
router.post('/editar_C', async (req, res) => {
	try {
		const result = await services.editar_C(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});


router.post('/eliminar_C', async (req, res) => {
	try {
		const result = await services.eliminar_C(req.body);
		res.json(result);
	} catch (error) {
		res.status(500).json({ Status: 500, Message: error });
	}
});


module.exports = router;
