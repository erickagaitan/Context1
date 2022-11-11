import {useContext} from "react"
import { FotoContext } from "../context/FotosProvider"
import "../css/galeria.css"
import"../Views/app.css"
import Navbar from "../components/Navbar"


const Favoritos =()=> {
 
const {favoritos} = useContext (FotoContext)

console.log(favoritos)
    return (
    <div>

        <div >
             <Navbar />
        </div>
       

        <h2>Fotos Favoritas</h2>

            <div className="p-3 galeria grid-columns-4">

                {
                favoritos?.map ((foto) => {
                return (
                    
                    <div 
                    key={foto.id}
                    
                    className="card"
                    style={{height: '200px' ,backgroundImage:`url(${foto.src.portrait})`}}>
                    <p className='parrafos'>{foto.alt}</p>

                    </div>
                )
                })
                
                }

            </div>
    </div>



        )
    }
   
   export default Favoritos