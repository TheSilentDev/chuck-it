import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_JOKE_BY_CATEGORY } from '../graphql/queries';

export default class ChuckAPI {
	private client: ApolloClient<{}>;

	constructor() {
		this.client = new ApolloClient({
			uri: 'https://jw7no4fsz5.execute-api.us-east-1.amazonaws.com/dev/graphql',
			cache: new InMemoryCache(),
		});
	}

	getJokesByCategory = async (category: string) => {
		return await this.client.query({
			query: GET_JOKE_BY_CATEGORY,
			variables: { category },
		});
	};
}
