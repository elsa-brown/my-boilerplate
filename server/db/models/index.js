const User = require('./user');
const Resource = require('./resource');
// const Category = require('./category');

// Resource gets userId attribte
// User gets getResources and setResources
// User.hasMany(Resource);
Resource.belongsToMany(User, {through: 'UserResource'});
User.belongsToMany(Resource, {through: 'UserResource'});

module.exports = {
	User, Resource
};
