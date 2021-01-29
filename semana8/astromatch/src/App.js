import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Tinder-Card';
import List from './components/List-Match';

function App() {

  const [matchlist, setMatchList] = useState(false);

  useEffect(() => {
    document.title = 'AstroMatch'
  })

  const GoList = () => {
    setMatchList(true)
  };

  const GoHome = () => {
    setMatchList(false)
  };

  const ChangePage = () => {
    if (matchlist === false) {
      return (
        <div className="App">
          <Header changeList={GoList} />
          <hr />
          <Card />
        </div>
      )
    }
    else {
      return (
        <List changeHome={GoHome} />
      );
    }
  }

  return (
    <div>
      {ChangePage()}
    </div>
  )


}

export default App;
