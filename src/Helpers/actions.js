import { AlbumContext } from "../hooks/useContext";
import React,{useContext} from 'react';
import { useHistory } from "react-router";
export const AlbumActions = ()=>{
    const history = useHistory()
    const { setpaisActive } = useContext(AlbumContext);

const SetPais = (id) =>{

    setpaisActive(id)
    alert(id)
    history.push("/categorias");
}

return [SetPais]
}