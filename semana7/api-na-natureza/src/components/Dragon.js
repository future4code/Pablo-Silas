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
    background-color: red;
    color: white;
    padding: 10px;
    opacity: 40%;
    outline: 0px;
    :hover{
        opacity:100%;
    }
`
const Selection = styled.select `
    text-align: center;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    opacity: 80%;
    font-size: 20px;
    :hover {
        opacity: 100%
    }
`
const Images = styled.img `
    width: 200px;
    height: 200px;
    border: 0px;
    display: block;
    margin: auto;
    margin-top: 25px;
    border:2px solid white;
    margin-bottom: 15px;
`

const BoxSelect = styled.div ` 
    display:flex;
    justify-content: center;
`

const BoxInfo = styled.div `
    
`

const Name = styled.h1`
    text-align:center;
    margin-bottom: 15px;
`

const H6 = styled.h6 `
    text-align: center;
    margin-bottom: 15px;
`

const Info = styled.p `
    margin: 5px;
    padding: 5px;
`
const H1 = styled.h1 `
    opacity: 50%;
    margin-bottom: 20px;
`
const HR = styled.hr `
    opacity: 30%;
    border-radius: 5px;
    margin: auto;
    width: 70%;
`

export default class Dragon extends React.Component {
    state = {
        dragon: [],
        images: [],
        name: [],
        description: [],
        type: [],
        orbitDuration: [],
        dryMass: [],
        firstFlight: [],
    }
    componentDidMount =() => {
        this.getAllDragons()
    }
 

    getAllDragons = () => {
        axios.get('https://api.spacexdata.com/v4/dragons')
        .then((res) => {
            console.log(res)
            this.setState({dragon: res.data});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    getInfo = (e) => {
        const id = e.target.value
        axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
        .then((res) => {
            this.setState({images: res.data.flickr_images[2]})
            this.setState({name: res.data.name})    
            this.setState({description: res.data.description})
            this.setState({type: res.data.type})
            this.setState({orbitDuration: res.data.orbit_duration_yr})
            this.setState({dryMass: res.data.dry_mass_kg})
            this.setState({firstFlight: res.data.first_flight})
            console.log(res.data)
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
                 <H1>Dragon</H1>
                 <BoxSelect>
                    <Selection onChange={this.getInfo}>
                     <option></option>
                     {this.state.dragon.map((i) => {
                         return (
                             <option value={i.id}>{i.name}</option>
                         );
                         
                     })}
                    </Selection> 
                 </BoxSelect>
                 <BoxInfo>
                        <Images src={this.state.images}/> 
                        <Name>{this.state.name}</Name>
                        <H6>{this.state.description}</H6>
                        <br/>
                        <HR/>
                        <Info><strong>Type: </strong>{this.state.type}</Info>
                        <Info><strong>Orbit Duration: </strong>{this.state.orbitDuration + ' years'}</Info>
                        <Info><strong>Dry Mass: </strong>{this.state.dryMass + 'kg'}</Info>
                 </BoxInfo>
                 
             </Box>
             
         </Principal> 

        )
    }
}