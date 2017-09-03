const router = require('express').Router();

module.exports = router;

router
	.use('/users', require('./users'))
	.use('/resources', require('./resources'));

// 404 error handling
router.use((req, res, next) => {
	const err = new Error('Not found.');
	err.status = 404;
	next(err);
});
