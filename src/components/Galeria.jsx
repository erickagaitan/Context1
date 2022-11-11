import React, { useContext } from 'react'
import { FotoContext } from '../context/FotosProvider'
import Heart from "./Heart"
import "../Views/app.css"
import "../css/galeria.css"

const Galeria = ()=> {

    const {fotos,favoritos,handleFavoritos} =useContext(FotoContext)


return (
<div className="galeria p-3">
    
{
    fotos?.map((foto)=> {
        return (
        <div 
            key={foto.id} 
            className="card"
            onClick={()=>handleFavoritos(foto)}

            style={{backgroundImage:`url(${foto.src.portrait})`}} 
        > 
            <div>
              <Heart filled={favoritos.includes(foto)?true:false}></Heart>
            </div>
           <div>
            <p className='parrafos'>{foto.alt}</p> 
           </div>
           
            
        </div>
        )
    })
}
</div>
)
}

export default Galeria