import React from 'react';
import PokeDex from './PokeDex';
import pokemon from './pokemon';


function App(){
    return (
    <div className='row'>
        <PokeDex pokemon={pokemon} />
    </div>
    )
}

export default App;