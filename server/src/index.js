const { ApolloServer, gql } = require('apollo-server');
const connectToDb = require('./connections/mongodb');
const CarModel = require('./models/car');
const CarResolver = require('./resolvers/car');

const typeDefs = gql`
	type Car {
		Brand: String
		Model: String
		Generation: String
		Modification_Engine: String
		Doors: String
		Power: String
		Maximum_Speed: String
		Acceleration: String
		Year_Introduced: String
		Carroserie: String
		Seats: String
		Engine_Position: String
		Displacement: String
		Torque: String
	}

	type Query {
		cars: [Car]
	}
`;

const resolvers = {
	Query: {
		cars: CarResolver
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',
	context: {
		models: {
			CarModel
		}
	}
});

connectToDb();
server.listen().then(({ url }) => {
	console.log(`🚀 Server is ready at ${url}`);
});
