import { gql, useQuery } from '@apollo/client';
import React from 'react'

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;
const ClientComponent = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data)
    return (
        <div>ClientComponent</div>
    )
}

export default ClientComponent