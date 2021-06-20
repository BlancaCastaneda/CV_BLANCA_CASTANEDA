import foto from './foto.jpg';
import './Educacion.css';

function Educacion() {
  return (
<header>
    <div className="experiencia">

    <div className="foto">
             <img src={foto} alt="foto de Blanca" />
        </div>  

        
        <div className="educacionx3"><h2 className="skills"> EDUCACIÓN</h2><hr></hr>
            <p className="year"><i class="fas fa-user-graduate"> 2021 Tecnico Laboral en Procesamiento y Digitacion de Datos</i></p>
            <p className="parrafo">Institucion para el Trabajo y Desarrollo Humano Kuepa Edutech. </p>

            <p><i class="fas fa-user-graduate"> 2009 Tecnico Laboral en Auxiliar Administrativo</i></p>
            <p className="parrafo">Corporacion Iberoamericana de Estudios CIES.</p>
        </div>

        <div className="educacionx3"><h2 className="skills"> EXPERIENCIA LABORAL</h2><hr></hr>
            <p className="year"><i class="fas fa-user-tie"> 2010 - 2020 Banco BBVA</i></p>
                <p className="parrafo"><ul>
                <li type="dis">Area de Riesgos</li> Referenciacion de Clientes.<br></br>
                <li type="dis">Area de Banca de Empresas</li> Servicio al Cliente, Cajera Principal, Auxiliar Integral de Servicios.
                </ul></p>

        </div>

        <div><h2 className="skills" >HABILIDADES</h2><hr></hr>
            <p className="cursos">Diseno UX </p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">Diseno IU</p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">HTML Y CSS</p>
            <progress class="progress is-primary" value="80" max="100"></progress>
            <p className="cursos">JavaScript</p>
            <progress class="progress is-primary" value="60" max="100"></progress>
        </div>

        <div><h2 className="skillsh" >HOBBIES</h2>
            <p className="hobbies"><i class="fas fa-bicycle"></i></p>
            <p className="hobbies"><i class="fas fa-headphones"></i></p>
            <p className="hobbies"><i class="fas fa-puzzle-piece"></i></p>
            <p className="hobbies"><i class="fas fa-film"></i></p>
        </div>

    </div>
    </header>
    );
}
export default Educacion;