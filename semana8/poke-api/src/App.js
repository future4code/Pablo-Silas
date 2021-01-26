import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from './styled.js';
import PokeCard from './components/PokeCard';

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {

        setPokeList(response.data.results)

      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  return (
    <Box>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Box>
  );
}

export default App;
