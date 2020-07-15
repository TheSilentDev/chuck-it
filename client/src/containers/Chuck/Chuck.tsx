import React from 'react';
import { useJoke } from '../../contexts/joke.context';
import Categories from './Categories';
import Joke from './Joke';
import { Wrapper } from './styles';

const Chuck = () => {
	const { icon_url, joke, loading, getJokeByCategory } = useJoke();

	return (
		<Wrapper column>
			<Joke joke={joke} loading={loading} icon_url={icon_url} />
			<Categories key="categories" onClick={getJokeByCategory} />
		</Wrapper>
	);
};

export default Chuck;
