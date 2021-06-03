import React, {useState,useEffect,useContext} from 'react';
import Publicacion from '../componentes/Publicacion';
import {getPublicaciones } from '../Helpers/peticion';
import { AlbumContext } from '../hooks/useContext';
import './container.css'
const ContainerPublicacion = () => {
  const { categoriaActive} = useContext(AlbumContext);
    const [publicacion, setpublicacion] = useState();
  useEffect(() => {
    getPublicaciones().then((results)=> setpublicacion(results))
    
  }, []);
    return ( 
    <div className="containerpais">
            {!!publicacion&&publicacion.filter((publi=> publi.categoria_id === categoriaActive))
            .map((publicacion)=>{
              console.log(publicacion)
            return(< Publicacion key={publicacion.id} Publicacion={publicacion}/>
                  )
            
            })}
    </div>
     );
}
 
export default ContainerPublicacion;