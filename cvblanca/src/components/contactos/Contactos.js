import linkedin from "./linkedin.png";
import github from "./github.png";
import './Contactos.css';

function Contactos() {
  return (
    
          <div className="contacto">
            <h2>ACERCA DE MI</h2>
            <hr></hr>
            <p>Soy una mujer con principios y valores inculcados desde mi hogar. Actualmente soy estudiante del Técnico Laboral 
               en Procesamiento y Digitación de Datos, programa que ha llamado mi atención a tal punto de seguir estudiando esta 
               maravillosa carrera. Aunque en estos momentos no cuento con la experiencia, deseo me brinden la oportunidad de hacer
               mis prácticas y así poder hacer carrera en esta maravillosa empresa.</p>
           
            <h2>CONTACTO</h2>   
            <hr></hr>
            <div className="info"><i class="fas fa-phone-alt"></i> 3154115390</div>
            <div className="info"><i class="fas fa-envelope"></i> blankcf1809@gmail.com</div>
            <div className="info"><i class="fas fa-map-marker-alt"></i> Cll 53 sur N. 13-41 Bogotá D.C, Colombia</div>
            
            <h2>REFERENCIAS</h2> 
            <hr></hr>
            <div className="ref"><span className="rnom"> BANCO BBVA COLOMBIA</span><p className="rcargo"> Recursos Humanos<i class="fas fa-phone-alt"></i>3471600 ext 11053</p></div>
            <div className="ref"><span className="rnom"> VISE LTDA </span><p className="rcargo"> Servicio al Cliente<i class="fas fa-phone-alt"></i> 3282912</p></div>
            
            <a href="https://www.linkedin.com/checkpoint/lg/login?trk=reset_password"><img src={linkedin} alt="imagen linkedin" width="40px"></img></a>
            <a href="https://github.com/"><img src={github} alt="imagen github"  width="40px"></img></a>
            <p>MAS INFORMACION</p>
           

          </div>
   );
}

export default Contactos;