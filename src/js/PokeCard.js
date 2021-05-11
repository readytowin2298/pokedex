import React from 'react';
import '../styles/PokeCard.css';

function PokeCard({id, name, type, base_experience}){
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="PokeCard col col-4 card">
            <h3 className="PokeCard-header">{ name }</h3>
            <img className="PokeCard-img" src={url} alt={`Pretty picture of ${name}`}/>
            <ul className="PokeCard-text">
                <li>Type: {type}</li>
                <li>Experience: {base_experience}</li>
            </ul>
        </div>
    )
};

export default PokeCard;