
import "./pais.css"
const Publicacion = ({Publicacion}) => {
  
let {id,name, image,categoria_id, url_video,texto,autor}= Publicacion

   let className = "pais"
    return ( 
      
      <div className={className}>
          <div className="tituloalbum">{name}</div>
          <img  className="imgPais" src={image}/>
          <div className="tituloalbum">{autor}</div>
        </div>
   
      
     );
}
 
export default Publicacion;