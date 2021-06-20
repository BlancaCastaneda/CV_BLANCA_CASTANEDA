import foto from './foto.jpg';
import './Header.css';

function Header() {
  return (
      <header>
         <div className="foto">
             <img src={foto} alt="foto de Blanca" />
        </div>  

        <div className="texto">
            <h1 className="profesion">JUNIOR FRONTEND DEVELOPER</h1><br></br>
            <h3 className="nombre">BLANCA CASTAÑEDA FONSECA</h3>
        </div>
      </header>
   );
}
export default Header;