const mongoose = require('mongoose');

const connectToDb = () => {
	return mongoose.connect('mongodb://localhost:27016/svelte-graphql-mongo', {}, err => {
		if (err) {
			console.error('Connection to DB failed');
		} else {
			console.log('Connection to DB was successful');
		}
	});
};

module.exports = connectToDb;
