const mongoose = require('mongoose');

/**
 *
 * @param {any} parent
 * @param {*} arguments
 * @param {{
 *   models: {
 *       CarModel: mongoose.Model
 *   }
 * }} context
 * @returns
 */
module.exports = async (_, {}, { models }) => {
	return await models.CarModel.find();
};
