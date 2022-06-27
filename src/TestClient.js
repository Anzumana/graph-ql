import React from 'react';
import { useQuery, gql} from '@apollo/client';

const EXCHANGE_RATES = gql`
query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function TestClient(props) {
	  const { loading,error, data } = useQuery(EXCHANGE_RATES);

	  if (loading) return <p>Loading...</p>;
	  if (error) return (<p>Error :</p>);
		return (<div> {data + ''} </div>);
}
export default TestClient;
