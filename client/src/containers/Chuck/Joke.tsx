import React from 'react';
import { Loader } from '../../components';
import { Wrapper, JokeText, ChucksFace } from './styles';

interface IJoke {
	joke: string;
	loading: boolean;
	icon_url: string;
}

const Joke: React.FC<IJoke> = ({ joke, loading, icon_url }) => {
	if (loading) return <Loader type="ThreeDots" color="secondary" />;

	return (
		<Wrapper column width="60%">
			{icon_url && <ChucksFace src={icon_url} alt="joke" />}
			<JokeText>{joke}</JokeText>
		</Wrapper>
	);
};
export default Joke;
