function Character({name, origin, status, image}){
    let statusColor;

    if(status === "Alive"){
        statusColor = "aliveColor";
    }else if(status === "Dead"){
        statusColor = "deadColor";
    }else{
        statusColor = "unknownColor";
    }

    return(
            <>
            <p>{name}</p>
            <p>Origin: {origin} </p>
            <p className={statusColor}>Status: {status} </p>
            <img src={`${image}`} alt="" />
            </>
    );
}

export default Character;