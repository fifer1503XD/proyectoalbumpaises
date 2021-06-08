import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ContainerPais from './container/ContainerPais';
import DetailPublicacion from './componentes/DetailPublicacion'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContainerCategoria from './container/ContainerCategoria';
import ContainerPublicacion from './container/ContainerPublicacion'
import { AlbumContext } from './hooks/useContext';

function App() {
  const [paisActive, setpaisActive] = useState();
  const [categoriaActive, setcategoriaActive] = useState();
  const [publicacionActive, setpublicacionActive] = useState();
  const [detailPublicacion, setdetailPublicacion] = useState();
  return(
    <AlbumContext.Provider value={{paisActive, setpaisActive,categoriaActive, setcategoriaActive,detailPublicacion, setdetailPublicacion,publicacionActive, setpublicacionActive}}>
    <Router>
      <Switch>
      <Route exact path="/" component ={ContainerPais}/>
      <Route exact path="/categorias" component ={ContainerCategoria}/>
      <Route exact path="/publicaciones" component ={ContainerPublicacion}/>
      <Route exact path="/publicacion" component ={DetailPublicacion}/>
      </Switch>
  </Router>
</AlbumContext.Provider>
  )}

export default App;
