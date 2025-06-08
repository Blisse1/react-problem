// usar prompts
// Card, Item, CharacterCard
function Character({name, origin, status, image}){
    return(
            <>
            <p>{name}</p>
            <p>Origin: {origin} </p>
            <p>Status: {status} </p>
            <img src={`${image}`} alt="" />
            </>
    );
}

export default Character;