import { AlbumContext } from "../hooks/useContext";
import React,{useContext,useEffect}from 'react';
import { getPublicacion } from "../Helpers/peticion";
const DetailPublicacion = () => {
    const {detailPublicacion, setdetailPublicacion,publicacionActive} = useContext(AlbumContext);
    useEffect(() => {
        getPublicacion(publicacionActive).then((results)=> setdetailPublicacion(results))
        
      }, []);
      const {name, image, autor,url_video,texto}=detailPublicacion
    return ( 
      detailPublicacion ? (
      <div className="pais">
         <div className="tituloalbum">{name}</div>
          <img  className="imgPais" src={image}/>
          <div className="tituloalbum">{autor}</div>
          <div className="tituloalbum">{texto}</div>
          <iframe width="400" height="400" src={url_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      ): <div>Loading....</div>
     );
}
 
export default DetailPublicacion;