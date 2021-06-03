import { AlbumContext } from "../hooks/useContext";
import React,{useContext} from 'react';
import { useHistory } from "react-router";
export const AlbumActions = ()=>{
    const history = useHistory()
    const {paisActive, setpaisActive,categoriaActive, setcategoriaActive} = useContext(AlbumContext);

const SetPais = (id) =>{

    setpaisActive(id)
    alert(id)
    history.push("/categorias");
}
const SetCategoria = (id) =>{
    console.log(id)
    setcategoriaActive(id)
    alert(categoriaActive,"categoria activate")
    history.push("/publicaciones");
}

return [SetPais, SetCategoria]
}