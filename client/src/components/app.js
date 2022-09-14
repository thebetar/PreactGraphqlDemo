import Header from './header';

// Code-splitting is automated for `routes` directory
import { ApolloProvider } from '@apollo/client';
import { client } from '..';
import Home from '../routes/home';

const App = () => (
	<ApolloProvider client={client}>
		<div id="app">
			<Header />
			<Home path="/" />
		</div>
	</ApolloProvider>
);

export default App;
