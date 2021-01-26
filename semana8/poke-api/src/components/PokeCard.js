import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function PokeCard(props) {

    const [pokemon, setPokemon] = useState({})

    const pegaPokemon = (pokeName) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        pegaPokemon(props.pokemon);
    }, [])

    useEffect(() => {
        if (pokemon !== props.pokemon) {
            pegaPokemon(props.pokemon)
        }
    }, [props.pokemons])

    return (
        <div>
            <strong><p>{pokemon.name}</p></strong>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}

export default PokeCard;