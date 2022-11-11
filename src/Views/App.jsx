import React, { useState, useEffect } from 'react'
import {BrowserRouter,Routes,Route}from"react-router-dom"
import Home from '../Views/Home'
import Galeria from '../components/Galeria'
import '../../src/Views/app.css'
import Favoritos from './Favoritos';
import FotosProvider from '../context/FotosProvider'

const App = () => {

const api = '../api/fotos.json'

const [fotos,setFotos]=useState ([])
const [favoritos,setFavoritos]= useState ([])



const handleFavoritos = (foto)=> {

const enFavoritos= favoritos.includes(foto)

if(enFavoritos){
  const favoritosActualizado = favoritos.filter((favorito) => favorito != enFavoritos)
  console.log(enFavoritos)
  setFavoritos(favoritosActualizado)  
}else{
  const favoritosActualizado = [...favoritos]
    favoritosActualizado.push(foto)
    setFavoritos(favoritosActualizado)
}  

}



const globalState= {fotos,favoritos,handleFavoritos}


useEffect (()=>{
fetch (api)
.then((res)=> res.json ())
.then ((json)=> {
  console.log (json.photos)
  setFotos(json.fotos)
})
.catch((e)=>console.log(e))

},[])


return (
    <div className="App">
        <BrowserRouter>
          <FotosProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/galeria" element = {<Galeria/>}/>
                <Route path="/favoritos" element = {<Favoritos/>}/>
            </Routes>
          </FotosProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
