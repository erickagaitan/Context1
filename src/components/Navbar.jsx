import { Link } from "react-router-dom"
import "../Views/app.css"

const Navbar = () => {
return (

    <nav className="navbar">
        <div className="container-link">
            <Link className="titulo" to="/">Home</Link> | <Link className="titulo"to="/favoritos">Favoritos</Link>
        </div>
      
    </nav>

)
}


export default Navbar