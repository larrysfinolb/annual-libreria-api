const profileRouter = require('./profileRouter');
const bookcasesRouter = require('./bookcasesRouter');
const booksRouter = require('./booksRouter');

const router = (app) => {
	app.use('/api/profile', profileRouter);
	app.use('/api/bookcases', bookcasesRouter);
	app.use('/api/books', booksRouter);
};

module.exports = router;
