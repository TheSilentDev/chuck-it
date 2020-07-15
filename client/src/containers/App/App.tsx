import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../../theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PageWrapper } from '../../layout';
import { Chuck } from '../Chuck';
import JokeProvider from '../../contexts/joke.context';

const client = new ApolloClient({
	uri: '/dev/graphql',
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<PageWrapper>
					<JokeProvider>
						<Chuck />
					</JokeProvider>
				</PageWrapper>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
