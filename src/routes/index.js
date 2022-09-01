const profileRouter = require('./profileRouter');
const bookcasesRouter = require('./bookcasesRouter');
const inventoryInstancesRouter = require('./inventoryInstancesRouter');
const booksRouter = require('./booksRouter');
const clientsRouter = require('./clientsRouter');

const router = (app) => {
	app.use('/api/profile', profileRouter);
	app.use('/api/bookcases', bookcasesRouter);
	app.use('/api/inventory-instances', inventoryInstancesRouter);
	app.use('/api/books', booksRouter);
	app.use('/api/clients', clientsRouter);
};

module.exports = router;
