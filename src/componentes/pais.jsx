import "./pais.css"
import {AlbumActions} from '../Helpers/actions'
const Pais = ({pais}) => {
  const [SetPais]= AlbumActions()
let {id,name, image}=pais
   let className = "pais"
    if (id == 4){
     className =" paisizq"
    }
    return ( 
      
      <div onClick={()=>{SetPais(id)}} className={className}>
          <div className="tituloalbum">{name}</div>
          <img  className="imgPais" src={image}/>
        </div>
   
      
     );
}
 
export default Pais;