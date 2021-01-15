import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const H1 = styled.h1` 
   padding: 40px;
  color: #1172eb;
  font-family: 'Bitter';
  font-size: 80px;
  opacity: 85%;
  :hover {
  opacity: 100%;
    
  }
`
const Box1 = styled.div `
    background-color: white;
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Bitter';
    width: 350px;
    height: 180px;
    margin: 15px;
    margin-left: 25px;
    border-radius: 10px;
    :hover {
        border: 1px solid #1172eb;
    }
`
const Box3 = styled.div `

    bottom: 200px;
    background-color: white;
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Bitter';
    width: 350px;
    height: 100%;
    margin: 15px;
    margin-left: 25px;
    border-radius: 10px;
    :hover {
        border: 1px solid #1172eb;
    }
`

const Box2 = styled.div `
    background-color: #1172eb;
    box-sizing: border-box;
    color:white;
    padding: 10px;
    font-family: 'Bitter';
    width: 500px;
    height: 100%;
    margin: 15px;
    margin-right: 70px;
    border-radius: 10px;
    :hover {
        border: 1px solid white;
    }
`

const Box = styled.div` 
    display: flex;
    justify-content: space-between;
`

const BoxPlaylist = styled.p`
    margin-top: 20px;
`

const CriarPlaylist = styled.button `
    display: block;
    border: 0px;
    padding: 10px;
    background-color: #1172eb;
    color:white;
    margin-top: 10px;
    :hover{
        background-color: #127DFF;
    }
    `
const Return = styled.img `
    width: 60px;
    height: 50px
    
`

const Select = styled.select `
    text-align: center;
`

const BoxInfo = styled.div `
    margin-top: 20px;
`

const Arrumar = styled.div ` 
    display: flex;
    flex-direction: column;
`

export default class Playlists extends React.Component {
    state = {
        playlist: [],
        inputNamePlaylist: [],
        inputNameMusic: [],
        inputArtist: [],
        inputUrl: [],
        track: [],
      }

    componentDidMount = () => {
        {this.pegarPlaylist()}
    }

    pegarPlaylist = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
              headers: {
                Authorization: "pablo-silas-epps"
              }
            }
          )
          .then((resposta) => {
              this.setState({playlist: resposta.data.result.list})
          
          })
          .catch((err) => {
            console.log(err.message);
          });

    }

    onChangeNamePlaylist = (event) => {
    this.setState({ inputNamePlaylist: event.target.value });
  };

    criarPlaylist = () => {
        const body = {
            name: this.state.inputNamePlaylist
        };
        
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
            {
              headers: {
                Authorization: "pablo-silas-epps"
              }
            }
          )
          .then((resposta) => {
              this.pegarPlaylist();
              alert('Playlist criada com sucesso!')
              this.setState({inputNamePlaylist: [],})
          
          })
          .catch((err) => {
              alert('Erro ao criar playlist!')
            console.log(err.message);
          });
      };

      onChangeNameMusic = (event) => {
    this.setState({ inputNameMusic: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ inputArtist: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

      criarTrackPlaylist = (e) => {
        const id = e.target.value
        const body = {
            name: this.state.inputNameMusic,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
            {
              headers: {
                Authorization: "pablo-silas-epps"
              }
            }
          )
        .then((res) => {
            this.getTrackPlaylist();
            alert('Musica criada com sucesso!')

        })
        .catch((err) => {
            alert('Erro ao criar musica!')
            console.log(err)
        })
    }

      getTrackPlaylist = (e) => {
        const id = e.target.value
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {
              headers: {
                Authorization: "pablo-silas-epps"
              }
            }
          )
        .then((res) => {
            this.setState({track: res.data.result.tracks})
            console.log(res.data.result.tracks)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  render() {
    return (
        <div>
            <div>
                <H1>Labefy</H1>
            </div>
            <Box> 
            <Arrumar>
                <Box1>
                    <h1>Criar Playlist</h1>
                    <BoxPlaylist>
                        <p>Nome da playlist: </p>
                        <input value={this.inputNamePlaylist} onChange={this.onChangeNamePlaylist}></input>
                        <CriarPlaylist onClick={this.criarPlaylist}>Criar</CriarPlaylist>
                    </BoxPlaylist>
                </Box1>
                < Box3> 
                    <h1>Adicionar Musica</h1>
                    <BoxPlaylist>
                        <p>Nome da musica: </p>
                        <input value={this.inputNameMusic} onChange={this.onChangeNameMusic}></input>
                        <p>Artista: </p>
                        <input value={this.inputArtist} onChange={this.onChangeArtist}></input>
                        <p>URL da musica: </p>
                        <input value={this.inputUrl} onChange= {this.onChangeUrl}></input>
                        <p>Adicionar na playlist: </p>
                        <div>
                            
                            <select onChange={this.getTrackPlaylist}>
                                <option></option>
                                {this.state.playlist.map((i) => {
                                    return (
                                        <option value={i.id}>{i.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <CriarPlaylist onClick={this.criarTrackPlaylist}>Adicionar</CriarPlaylist>
                    </BoxPlaylist>
                </Box3>
                </Arrumar>
                <Box2>
                    <h1>Playlists</h1>
                    <div>
                    <Select onChange={this.getTrackPlaylist}>
                     <option></option>
                     {this.state.playlist.map((i) => {
                         return (
                             <option value={i.id}>{i.name}</option>
                         );
                         
                     })}
                    </Select> 
                    </div>
                    <BoxInfo>
                     <p>{this.state.track.map((i) => {
                         return (
                             <div>
                                <p>{i.artist}</p>
                                <p>{i.name}</p>
                                <audio src={i.url} controls='controls'/>
                             </div>
                         )
                     })}</p>
                    </BoxInfo>
                </Box2>
            </Box>
                <Return src='https://cdn.onlinewebfonts.com/svg/img_365206.png' onClick={this.props.state}/>
           
        </div>

    );
  }
  
}


