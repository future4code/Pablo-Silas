import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
        state = {
          pessoas: [
            {
              nomeUsuario: "paulinha",
              fotoUsuario: 'https://picsum.photos/50/50' ,
              fotoPost: 'https://picsum.photos/200/150'
            },
            {
              nomeUsuario:'labenu' ,
              fotoUsuario: 'https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg' ,
              fotoPost: 'https://scontent.fgru8-1.fna.fbcdn.net/v/t1.0-9/131018285_706793686632434_876711595821607298_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=1B-8OKZb0q0AX96S8Ni&_nc_ht=scontent.fgru8-1.fna&oh=7a23e6f5cd18329e469fc0c12f02123c&oe=5FFF169D' 
            },
            {
              nomeUsuario: 'pablo' ,
              fotoUsuario: 'https://picsum.photos/200' ,
              fotoPost:'https://picsum.photos/200/300' 
            }
          ],
         
          valorInputNomeUsuario: "",
          valorInputFotoUsuario: "" ,
          valorInputPost: ""
        };
      
        adicionaPost = () => {
          const novoPost = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            fotoUsuario: this.state.valorInputFotoUsuario,
            fotoPost: this.state.valorInputPost
          };
    
          const newPost = [...this.state.pessoas, novoPost];
 
          this.setState({pessoas: newPost});
        };
      
        onChangeInputNomeUsuario= (event) => {
          this.setState({ valorInputNomeUsuario: event.target.value });
        };
      
        onChangeInputFotoUsuario = (event) => {
          this.setState({ valorInputFotoUsuario: event.target.value });
        };
        onChangeInputPost = (event) => {
          this.setState({ valorInputPost: event.target.value });
        };
      
        render() {
          const listaDeComponentes = this.state.pessoas.map((pessoa) => {
            return (
              <Post>
                {pessoa.nomeUsuario} - {pessoa.fotoUsuario} - {pessoa.fotoPost}
              </Post>
            );
          });
      
          return (
            <div>
              <div>
                <input
                  value={this.state.valorInputNomeUsuario}
                  onChange={this.onChangeInputNomeUsuario}
                  placeholder={"Nome do Usuario"}
                />
                <input
                  value={this.state.valorInputFotoUsuario}
                  onChange={this.onChangeInputFotoUsuario}
                  placeholder={"Foto do Usuario"}
                />
                <input
                  value={this.state.valorInputPost}
                  onChange={this.onChangeInputPost}
                  placeholder={"Foto do Post"}
                />
                <button onClick={this.adicionaPost}>Adicionar</button>
              </div>
              <div>{listaDeComponentes}</div>
            </div>
          );
        }
      }

export default App;
