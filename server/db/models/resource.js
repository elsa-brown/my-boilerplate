const Sequelize = require('sequelize');
const db = require('./db');

const Resource = db.define('resource', {
	title: {
		type: Sequelize.STRING,
		//allowNull: false,
	},
	url: {
		type: Sequelize.STRING,
		// isUrl: true
	},
	notes: {
		type: Sequelize.TEXT
	}
});

module.exports = Resource;
