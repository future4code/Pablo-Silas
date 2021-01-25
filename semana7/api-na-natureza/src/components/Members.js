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

const BoxMember = styled.div`
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
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

const Image = styled.img `
    width: 250px;
    height: 250px;
    
    border: 1px solid white;
    margin-top: 30px;
    border-radius: 8px;
    opacity: 50%;
    :hover {
        opacity: 100%
    }

`

const H1 = styled.h1 `
    opacity: 50%;
`

const HR = styled.hr `
    opacity: 30%;
    border-radius: 5px;
    margin: auto;
    width: 70%;
`

export default class Members extends React.Component {
    state = {
        members: [],
        photo: [],
    }
    componentDidMount =() => {
        this.getMembers()
    }

    getMembers = () => {
        axios.get('https://api.spacexdata.com/v4/crew')
        .then((res) => {
            console.log(res.data)
            this.setState({members: res.data});
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
                 <H1>Members</H1>
                 <br/>
                 <HR/>
                     {this.state.members.map((i) => {
                         return ( 
                           <div> 
                             <BoxMember>
                                 
                                <a href={i.wikipedia} target="_blank"><Image src={i.image}/></a>
                                <p><strong>Name: </strong>{i.name}</p>
                                <p><strong>Agency: </strong>{i.agency}</p>
                                <p><strong>Status: </strong> {i.status}</p>
                             </BoxMember>
                             <br/>
                             <HR/>
                             </div>   
                         );
            
                     })}
    
             </Box>

         </Principal> 

        )
    }
}