import { createContext, useState, useEffect } from "react";
import data from '../api/fotos.json'

export const FotoContext = createContext()

const FotosProvider = ({children}) => {

    const [ fotos, setFotos ] = useState()
    const [ favoritos, setFavoritos] = useState([])

    const handleFavoritos = (foto)=> {

        const enFavoritos= favoritos.includes(foto)
        
        if(enFavoritos){
          
          const favoritosActualizado = favoritos.filter((res) => res != foto)
          setFavoritos(favoritosActualizado)  
        }else{
          const favoritosActualizado = [...favoritos]
            favoritosActualizado.push(foto)
            setFavoritos(favoritosActualizado)
        }  
        
    }
  
    useEffect(() => {
        setFotos(data.photos)
    },[])

    return (
        <FotoContext.Provider 
            value={{
                fotos,
                setFotos,
                handleFavoritos,
                favoritos
            }}>
            {children}
        </FotoContext.Provider>
    )
}

export default FotosProvider