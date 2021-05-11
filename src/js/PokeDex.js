import React from 'react';
import PokeCard from './PokeCard';

function PokeDex({pokemon}){
    return (
        <div className="PokeDex row">
            {pokemon.map(p => (
                <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
            ))}
        </div>
    )
}

export default PokeDex;