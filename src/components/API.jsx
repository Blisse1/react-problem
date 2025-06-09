import { gql, useQuery } from '@apollo/client'
import Character from "./Character"
import { useState } from 'react';

const GET_CHARACTERS = gql`
    query {
        characters{
    info {
      count
    }
    results {
      id
      name
      gender
      status
      origin{
        name 
      }
      image
    }
  }
      } 
    `;


function API() {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    let characters = data.characters.results;

    return (
        characters
    );
}

export default API;
