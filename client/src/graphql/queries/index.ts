import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
	{
		categories
	}
`;

export const GET_JOKE_BY_CATEGORY = gql`
	query getJokeByCategory($category: String) {
		getJokeByCategory(category: $category) {
			categories
			created_at
			icon_url
			id
			updated_at
			url
			value
		}
	}
`;
