import React from 'react';
const InfoCards = (props) => { 
    return (
        <div className="info-card">
           <h2 className="info-title"> {props.card.title}</h2> 
           <p className="info-description"> {props.card.description} </p> 
        </div>
        ); 
    };
export default InfoCards;