
import { AlbumActions } from "../Helpers/actions"
import "./pais.css"
const Publicacion = ({Publicacion}) => {
  const [,,showDetailPulicacion]= AlbumActions()
let {id,name, image,categoria_id, url_video,texto,autor}= Publicacion

   let className = "pais"
    return ( 
      
      <div onClick={()=>{showDetailPulicacion(id)}} className={className}>
          <div className="tituloalbum">{name ? name.toUpperCase() : null}</div>
          <img  className="imgPais" src={image}/>
          <div className="tituloalbum">{autor}</div>
        </div>
   
      
     );
}
 
export default Publicacion;