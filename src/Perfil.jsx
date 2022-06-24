import {useState} from 'react';
import Button from './Button';
import'./Perfil.css';
function Perfil({nome,num}){

    return (
        <div className='card'>
            <p className='cardTitle'>{nome}</p>
            <p className='cardsubTitle'>{num}</p>
        </div>
    );
};
export default Perfil;