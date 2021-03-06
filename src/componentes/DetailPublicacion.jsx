import { AlbumContext } from "../hooks/useContext";
import React, { useContext, useEffect } from 'react';
import { getPublicacion } from "../Helpers/peticion";
import "./pais.css"
import 'animate.css/animate.css'
const DetailPublicacion = () => {
  const { detailPublicacion, setdetailPublicacion, publicacionActive } = useContext(AlbumContext);
  useEffect(() => {
    getPublicacion(publicacionActive).then((results) => setdetailPublicacion(results))

  }, []);
  const { name, image, autor, url_video, texto } = detailPublicacion
  return (
    detailPublicacion ? (
      <div className="detailPublicacion">
        <div className="tituloDetailPublicacion  animate__animated animate__backInDown">{name ? name.toUpperCase() : null}</div>
        <div className="video animate__animated animate__backInLeft "> 
        {url_video ? (
          <iframe  width="700" height="700" src={url_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>)
          : <img className="imgPublicacion" src={image} />}</div>
        
        <div className="card animate__animated animate__backInUp">
          <div className="textoPublicacion">{texto}</div>
          <div className="tituloalbum">{autor}</div>
        </div>

        
      </div>
    ) : <div>Loading....</div>
  );
}

export default DetailPublicacion;