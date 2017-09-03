const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	email: {
		type: Sequelize.STRING,
		// isEmail: true,
		// allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		// allowNull: false
	}
});

module.exports = User;
