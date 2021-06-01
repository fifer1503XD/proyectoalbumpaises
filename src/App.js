import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ContainerPais from './container/ContainerPais';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContainerCategoria from './container/ContainerCategoria';
import { AlbumContext } from './hooks/useContext';

function App() {
  const [paisActive, setpaisActive] = useState();
  return(
    <AlbumContext.Provider value={{paisActive, setpaisActive}}>
    <Router>
      <Switch>
      <Route exact path="/" component ={ContainerPais}/>
      <Route exact path="/categorias" component ={ContainerCategoria}/>

      </Switch>
  </Router>
</AlbumContext.Provider>
  )}

export default App;
