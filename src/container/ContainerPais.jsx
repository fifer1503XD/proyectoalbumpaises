import {getPais} from '../Helpers/peticion'
import { useEffect, useState } from "react";
import Pais from '../componentes/pais';

import './container.css'

const ContainerPais = () => {
    
const [pais, setpais] = useState();
  useEffect(() => {
    getPais().then((results)=> setpais(results))
    console.log(pais)
  }, []);

  return (
     

        <div className="containerpais">
             <div className="tituloalbum">Bienvenidos al album virtual grados 6 y 7</div>
            {!!pais&&pais.map((pais)=>{
            return(<Pais key={pais.id} pais={pais}/>
                
                )
            
            })}
        </div>
  )
     
}
 
export default ContainerPais;