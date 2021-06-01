
import "./pais.css"
const Categoria = ({Categoria}) => {
  
let {id,name, image,pais_id}= Categoria
   let className = "pais"
    return ( 
      
      <div className={className}>
          <div className="tituloalbum">{name}</div>
          <img  className="imgPais" src={image}/>
        </div>
   
      
     );
}
 
export default Categoria;