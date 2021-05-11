import React from 'react';
import PokeCard from './PokeCard';
import '../styles/PokeDex.css'

function PokeDex({pokemon}){
    return (
        <div className="PokeDex">
            <div className="row d-flex justify-content-center">
                {pokemon.map(p => (
                    <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                ))}
            </div>
        </div>
    )
}

export default PokeDex;