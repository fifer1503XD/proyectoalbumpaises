import React, {useState,useEffect,useContext} from 'react';
import Categoria from '../componentes/Categoria';
import { getCategorias } from '../Helpers/peticion';
import { AlbumContext } from '../hooks/useContext';
import './container.css'
const ContainerCategoria = () => {
  const { paisActive, setPaisActive } = useContext(AlbumContext);
    const [categoria, setcategoria] = useState();
  useEffect(() => {
    getCategorias().then((results)=> setcategoria(results))
    console.log(categoria)
  }, []);
    return ( 
    <div className="containerpais">
            {!!categoria&&categoria.filter((cate=> cate.pais_id === paisActive))
            .map((categoria)=>{
            return(<Categoria key={categoria.id} Categoria={categoria}/>
                  )
            
            })}
    </div>
     );
}
 
export default ContainerCategoria;