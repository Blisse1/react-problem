import { useState } from 'react';
import { gql, useQuery } from '@apollo/client'
import Character from './components/Character';
import './App.css'
import API from './components/API'

function App() {

    let api = API();

    console.log(api);

    // let myCharacters = asd.map(({ id, name, origin, image, status, gender }) => {
    //         const myObj = {
    //             id,
    //             name,
    //             origin: origin.name,
    //             image,
    //             gender,
    //             status
    //         };
    //         return (
    //             <>
    //             <li key={id}>
    //                 <Character {...myObj} />
    //             </li>
    //             </>
    //         );
    //     });

    // const [characters, setCharacters] = useState(myCharacters);

    // const myData = data.characters.results;

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const optionValue = e.target.elements.selectedGender.value;
    //     const filterCharacters = myData.filter(character => character.gender === optionValue);

    //     const filter = filterCharacters.map(({ id, name, origin, image, status, gender }) => {
    //         const myObj = {
    //             id,
    //             name,
    //             origin: origin.name,
    //             image,
    //             gender,
    //             status
    //         };
    //         return (
    //             <>
    //             <li key={id}>
    //                 <Character {...myObj} />
    //             </li>
    //             </>
    //         );
    //     })

    //     setCharacters(filter);
    // }

    return (
        <>
        <ul>
        {characters}
        </ul>
        </>
    );
}

export default App
