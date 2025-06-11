import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client'
import Character from './Character';
import GenderOptions from './GenderOptions';

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

function DisplayCharacters() {
    const {loading, error, data} = useQuery(GET_CHARACTERS);
    const [characters, setCharacters] = useState([]);

    // useEffect tiene que ver con los renderizados
    // quiero que se ejecute algo siempre que se vuelva a renderizar la pagina
    // o solo una vez, o cada vez que se modifique el estado de algo

    // en este caso es cada vez que se le haga algo a la variable data
    // renderice una vez data y cada vez si se modifica el estado de data

    // el primer estado de data es undefined
    // y cuando se define, el estado es otro
    useEffect(() => {
        if (data?.characters?.results) {
            setCharacters(data.characters.results)
        }
    }, [data])

    function handleSubmit(e) {
        e.preventDefault();
        const optionValue = e.target.elements.selectedGender.value;
        const myResults = data.characters.results;
        const filterCharacters = myResults.filter(character => character.gender === optionValue);

        if (optionValue === "All") {
            setCharacters(myResults);
        } else {
            setCharacters(filterCharacters);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <>
            <GenderOptions handleSubmit={handleSubmit}/>
            <ul>
                {characters.map(({ id, name, origin, image, status, gender }) => {
                    const myObj = {
                        id,
                        name,
                        origin: origin.name,
                        image,
                        gender,
                        status
                    };
                    return (
                        <li key={id}>
                            <Character {...myObj} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DisplayCharacters