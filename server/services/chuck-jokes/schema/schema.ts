import { gql } from 'apollo-server-lambda';

export default gql`
	type Query {
		getJokeByCategory(category: String): Joke
		categories: [String]
	}

	type Joke {
		categories: [String]
		created_at: String
		icon_url: String
		id: String
		updated_at: String
		url: String
		value: String
	}
`;
