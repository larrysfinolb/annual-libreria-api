const profileRouter = require('./profileRouter');
const bookcasesRouter = require('./bookcasesRouter');

const router = (app) => {
	app.use('/api/profile', profileRouter);
	app.use('/api/bookcases', bookcasesRouter);
};

module.exports = router;
