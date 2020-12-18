import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="image-button-container2">
            <img src={ props.imagem }/>
            <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;