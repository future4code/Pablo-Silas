import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Principal = styled.div `
display: flex;
flex-direction: column;
width: 100%;
`
const Logo = styled.img `
  opacity: 80%;
  width: 200px;
  height: 150px;
  margin-left: 50px;
  :hover {
    opacity: 100%;
  }
`
const BoxLogo = styled.div `
    width: 300px;
    margin: auto;
    margin-bottom:20px;
`

const Box = styled.div ` 
    border-radius: 10px;
    background-color: #0d0d0d;
    width: 700px;
    height: 100%;
    margin: auto;
    color: white;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 40px;
`

const BotaoHome = styled.button `
    display: block;
    margin: auto;
    margin-bottom: 20px;
    border: 0px;
    border-radius: 0px 0px 10px 10px;
    background-color: blue;
    color: white;
    padding: 10px;
    opacity: 40%;
    outline: 0px;
    :hover{
        opacity:100%;
    }
`

const H1 = styled.h1 `
    opacity: 50%;
    margin-bottom: 20px;
`

const H2 = styled.h2 `
    margin-bottom: 10px;
`
const H6 = styled.h6 `
    margin-bottom: 10px;
`

const Paragrafo = styled.p ` 
    margin-top: 10px;
    margin-bottom:10px;
`

const HR = styled.hr `
    opacity: 30%;
    border-radius: 5px;
    margin: auto;
    width: 70%;
`

export default class Company extends React.Component {
    state = {
        info: [],
    }

    componentDidMount =() => {
        this.getCompany()
    }

    getCompany = () => {
        axios.get('https://api.spacexdata.com/v4/company')
        .then((res) => {
            console.log(res.data)
            this.setState({info: res.data});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){  
        return (
           <Principal>
               <BoxLogo>
                    <BotaoHome onClick={this.props.state}>Go to Home</BotaoHome>
                    <Logo src='https://i.imgur.com/tE3Wo8S.png'/>
               </BoxLogo>
                <Box>
                    <H1>Company</H1>
                    
                    <HR/>
                    <br/>
                    <H2>{this.state.info.name}</H2>
                    <H6>{this.state.info.summary}</H6>
                    <br/>
                    <HR/>
                    <Paragrafo><strong>Founded: </strong>{this.state.info.founded}</Paragrafo>
                    <Paragrafo><strong>Founder: </strong>{this.state.info.founder}</Paragrafo>
                    <br/>
                    <HR/>
                    <Paragrafo><strong>CEO: </strong>{this.state.info.ceo}</Paragrafo>
                    <Paragrafo><strong>COO: </strong>{this.state.info.coo}</Paragrafo>
                    <Paragrafo><strong>CTO: </strong>{this.state.info.cto}</Paragrafo>
                    <Paragrafo><strong>Propulsion CTO: </strong>{this.state.info.cto_propulsion}</Paragrafo>
                </Box>
            </Principal>  

        )
    }
}