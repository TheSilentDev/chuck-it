import { RESTDataSource } from 'apollo-datasource-rest';

export default class ChuckNorrisAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.chucknorris.io/';
	}

	async getCategories() {
		return await this.get('jokes/categories');
	}

	async getJokeByCategory(category: String) {
		return await this.get(`jokes/random?category=${category}`);
	}
}
