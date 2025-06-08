import { gql, useQuery } from '@apollo/client'
import Character from "./Character"

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

function Data() {
  const { loading, error, data } = useQuery(RICK_INFO);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // console.log(myFilter);

  // recomendaciones
  // no mezclar jsx
  // el bloque de return con el jsx
  // un objeto representacion por prop y mandarlo como spread

  // agrupar componentes por responsabilidades usando 

  const myData = data.characters.results;

  const femalesFilter = myData.filter(character => character.gender === "Female");

  const malesFilter = myData.filter(character => character.gender === "male");

  // const mapFemales = femalesFilter.map(({ id, name, origin, image, status }) => (
  //   <li key={id}><Character key={id} name={name} origin={origin.name} image={image} status={status} /></li>
  // ));

  const myCharacters = femalesFilter.map(({ id, name, origin, image, status }) => {
    const myObj = {
      name,
      origin: origin.name,
      image,
      status,
    };

    return (
      <>
      <li key={id}>
        <Character {...myObj} />
      </li>
      </>
    );
  });

  return myCharacters;
}

export default Data;