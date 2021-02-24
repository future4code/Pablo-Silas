import React, { useEffect } from 'react';
import './App.css';
import Router from './router/Router'

function App() {

  useEffect(() => {
    document.title = 'LabeX';
  }, [])

  return <Router />
}

export default App;
