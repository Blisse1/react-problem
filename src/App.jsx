import { useState } from 'react';
import { gql, useQuery } from '@apollo/client'
import Character from './components/Character';
import './App.css'
import API from './components/API'

const RICK_INFO = gql`
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

function App() {
    const [characters, setCharacters] = useState([]);
    const { loading, error, data } = useQuery(RICK_INFO);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const myData = data.characters.results;

    function handleSubmit(e){
        e.preventDefault();
        const optionValue = e.target.elements.selectedGender.value;
        const filterCharacters = myData.filter(character => character.gender === optionValue);

        const filter = filterCharacters.map(({ id, name, origin, image, status, gender }) => {
            const myObj = {
                id,
                name,
                origin: origin.name,
                image,
                gender,
                status
            };
            return (
                <>
                <li key={id}>
                    <Character {...myObj} />
                </li>
                </>
            );
        })

        setCharacters(filter);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <select name='selectedGender'>
                <option value="">select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button>Filter gender</button>        
        </form>
        <ul>
        {characters}
        </ul>
        </>
    );
}

export default App
