import { gql, useQuery } from '@apollo/client'
import './App.css'
import Character from './components/Character';
    
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

    // gender/status filter
    // color status, green for alive, red for dead, gray for unknown

function App() {
  const {loading, error, data} = useQuery(RICK_INFO);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const test = data.characters.results;
  //console.log(test);

  const female = test.filter((character) => character.gender === "Female");
  // const male = [];
  // console.log(test.filter((character) => character.name === "Rick Sanchez"));
  console.log(female);

  return (
    <li>
    {female.map(({name, gender, status, image, origin}) => ( 
        <Character name={name} gender={gender} status={status} image={image} origin={origin} />
       ))
    }
    </li>
  );
      // <div key={`${id}`}>
      //   <p>{name}</p>
      //   <p>{gender}</p>
      //   <img src={`${image}`} alt="" />
      // </div>

      // Character.

  // console.log(c)

  // let myData = data.characters.results;

  // console.log(myData);

  // let myFilter = myData.filter(character => character.gender === "Female");
  // console.log(myFilter);filter((Character) =>)
}

export default App
