const resolvers = {
	Query: {
		getJokeByCategory: (
			_source,
			{ category },
			{ dataSources: { chuckNorrisAPI } }
		) => chuckNorrisAPI.getJokeByCategory(category),
		categories: (_source, _args, { dataSources: { chuckNorrisAPI } }) =>
			chuckNorrisAPI.getCategories(),
	},
};

export default resolvers;
