
import { AlbumActions } from "../Helpers/actions"
import "./pais.css"
const Categoria = ({Categoria}) => {
  const [,SetCategoria]= AlbumActions()
let {id,name,image,pais_id}= Categoria
   let className = "pais"
    return ( 
      
      <div  onClick={()=>{SetCategoria(id)}} className={className}>
          <div className="tituloalbum">{name}</div>
          <img  className="imgPais" src={image}/>
        </div>
   
      
     );
}
 
export default Categoria;