import React from 'react';
import PokeDex from './PokeDex';
import pokemon from './pokemon';
import '../styles/App.css'

function App(){
    return (
    <div className='justify-content-center'>
        <h1 className="display-1 App-header">POKEMON!</h1><br />
        <PokeDex pokemon={pokemon} /><br />
        <h4 className="display-4 App-tail">Gotta catch them all!</h4>
    </div>
    )
}

export default App;