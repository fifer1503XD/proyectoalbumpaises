import { AlbumContext } from "../hooks/useContext";
import React,{useContext} from 'react';
import { useHistory } from "react-router";
import { getPublicacion } from "./peticion";
export const AlbumActions = ()=>{
    const history = useHistory()
    const {paisActive, setpaisActive,categoriaActive, setcategoriaActive,publicacionActive, setpublicacionActive,setdetailPublicacion} = useContext(AlbumContext);

const SetPais = (id) =>{

    setpaisActive(id)
    history.push("/categorias");
}
const SetCategoria = (id) =>{
    console.log(id)
    setcategoriaActive(id)
    history.push("/publicaciones");
}

const showDetailPulicacion = (id) =>{
    setpublicacionActive(id)
    setdetailPublicacion(getPublicacion(id))
    history.push("/publicacion");
}

return [SetPais, SetCategoria,showDetailPulicacion]
}