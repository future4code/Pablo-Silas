import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'labenu'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg'}
          fotoPost={'https://scontent.fgru8-1.fna.fbcdn.net/v/t1.0-9/131018285_706793686632434_876711595821607298_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=1B-8OKZb0q0AX96S8Ni&_nc_ht=scontent.fgru8-1.fna&oh=7a23e6f5cd18329e469fc0c12f02123c&oe=5FFF169D'}
        />  

        <Post
          nomeUsuario={'pablo'}
          fotoUsuario={'https://picsum.photos/200'}
          fotoPost={'https://picsum.photos/200/300'}
        />  
      </div>
    );
  }
}

export default App;
