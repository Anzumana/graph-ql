import React from 'react';
import { render } from 'react-dom';
import {
	  ApolloClient,
	  InMemoryCache,
	  ApolloProvider,
	  useQuery,
	  gql
} from "@apollo/client";
import TestClient from './TestClient';

const client = new ApolloClient({
	uri: 'http://127.0.0.1:4000/graphql',
	  cache: new InMemoryCache()
});

function App() {
	  return (
			    <div>
			      <h2>My first Apollo app 🚀</h2>
			    </div>
			  );
}

render(
	  <ApolloProvider client={client}>
			<TestClient/>
	    <App />
	  </ApolloProvider>,
	  document.getElementById('root'),
);
export default App;
