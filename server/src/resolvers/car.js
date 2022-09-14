const CarModel = require('../models/car');

/**
 *
 * @param {any} parent
 * @param {*} arguments
 * @param {{
 *   dataSources: {
 *       models: {
 * 			CarModel: CarModel
 * 		}
 *   }
 * }} context
 * @returns
 */
module.exports = async (_, {}, { dataSources }) => {
	return await dataSources.models.CarModel.find();
};
