import React from 'react';

function PokeCard({id, name, type, base_experience}){
    return (
        <div className="PokeCard">
            <h3 className="PokeCard-header">{ name }</h3>
            <img className="PokeCard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <ul className="PokeCard-text">
                <li>Type: {type}</li>
                <li>Experience: {base_experience}</li>
            </ul>
        </div>
    )
};

export default PokeCard;