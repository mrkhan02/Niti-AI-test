import React from "react";

function Card(props){
    return(
        <>
        <div className='card'>
        <img src={props.img} width='400px' alt="" />
        <p>id={props.id}</p>
        </div>
        
        </>
    );
}

export default Card;