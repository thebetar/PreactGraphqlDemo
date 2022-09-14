import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/app';
import './style';

export const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache()
});

export default App;
