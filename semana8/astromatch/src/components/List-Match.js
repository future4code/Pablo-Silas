import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import styled from 'styled-components'
import { baseUrl, user } from './Parameters';


const App = styled.div` 

  text-align: center;
  border-radius: 10px;
  margin: auto;
  width: 400px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 600px;
  background-color: white;
  box-shadow: 4px 5px 4px 3px #c1c6cd;
`

const Img = styled.img`

    height: 50px;
    width: 50px;
    border-radius: 50%;
`
const Back = styled.img`

    height: 50px;
    width: 50px;
    cursor:pointer;
    padding: 10px;
    margin-right: 10px;
    :hover {
      cursor:pointer;  
      transform: scale(1.2);
      transition: linear 0.3s;
    }
`

const Box = styled.div`
    box-sizing: border-box;
    padding:10px;
    display: flex;

    :hover {
      cursor:pointer;
      background-color: #ccf5fc;

    }

`
const Name = styled.p`
    padding: 10px;
`

const Clear = styled.button`
    border: 0px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    margin-left: 20px;
    background-color: #efefef;

    :hover {
      background-color: #ccf5fc;
      color:#333;
      cursor:pointer;  
    }

`
const BoxButton = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function List(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    { GetMatches() }

  }, [])

  const clearMatches = () => {
    axios
      .put(`${baseUrl}/${user}/clear`)
      .then((res) => {
        alert("Sua lista de Matches foi limpa!")
        { GetMatches() }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetMatches = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${user}/matches`);
      setMatches(res.data.matches)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <App>
      <Header />
      <hr/>
      {matches.map((match) => {
        return (
          <Box>
            <Img src={match.photo} alt="" />
            <Name>{match.name}</Name>
          </Box>
        );
      })}
      <BoxButton>
        <Clear onClick={clearMatches}>Limpar Matches</Clear>
        <Back onClick={props.changeHome} src='https://i.imgur.com/EFytllv.png' />
      </BoxButton>
    </App>
  );
}

export default List;
