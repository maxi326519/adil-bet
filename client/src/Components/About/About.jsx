import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./About.css";

const teamMembers = [
  {
    name: "Laura Polo",
    image: require("../../Assets/Images/Image-laura.jpeg"),
    lema: "",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/laura-valencia-91b480170/",
    github: "https://github.com/lauravalenciapolo",
  },
  {
    name: "Luis Rodríguez",
    image: require("../../Assets/Images/Imagen-luis.jpeg"),
    lema: "Controlar la complejidad es la esencia de la programación - Brian Kernigan",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/luis-antonio-rodriguez-rodriguez-323a0222b/",
    github: "https://github.com/LuisRodriguzz",
  },
  {
    name: "Maximiliano García",
    image: require("../../Assets/Images/Imagen-maxi.jpeg"),
    lema: "Medir el progreso del desarrollo de software por líneas de código es como medir el progreso de la construcción de un avión por su peso - Bill Gates",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/maxi-garcia-fsd/",
    github: "https://github.com/maxi326519",
  },
  {
    name: "Manuel Villalobos",
    image: require("../../Assets/Images/Image-manu.jpeg"),
    lema: "A veces para aprender hace falta cuestionar lo que ya sabes",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/manuel-matias-villalobos-ordo%C3%B1ez-983086227/",
    github: "https://github.com/manuord",
  },
  {
    name: "Carlos Ciliberti",
    image: require("../../Assets/Images/Imagen-carlos.jpeg"),
    lema: "Sin dolor no hay ganancia.",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/calituz",
  },
  {
    name: "Gastón Alonso",
    image: require("../../Assets/Images/Image-gaston.jpeg"),
    lema: "Para tener éxito la actitud es tan importante como la habilidad.",
    ocupation: "Desarrollador Web FullStack",
    linkedin: "https://www.linkedin.com/in/gaston-alonso-018374254/",
    github: "https://github.com/GastonA95",
  },
  {
    name: "Fabián Tinjacá",
    image: require("../../Assets/Images/Image-fabian.jpg"),
    lema: "Soñé con ser Negociante Internacional algun dia, y ahora sé deployar codigo",
    ocupation: "Desarrollador Web FullStack",
    linkedin:
      "https://www.linkedin.com/in/fabian-david-tinjaca-salazar-95a787254/",
    github: "https://github.com/fabiangif",
  },
  {
    name: "Juan Gómez",
    image: require("../../Assets/Images/Imagen-juan.jpeg"),
    lema: "Programar es como vivir, no lo estás haciendo realmente si no aprendes algo nuevo cada día.",
    ocupation: "Desarrollador Web FullStack",
    linkedin:
      "https://www.linkedin.com/in/juan-carlos-g%C3%B3mez-cucaita-4677a218b/",
    github: "https://github.com/REALCHARLEX",
  },
];

const Team = () => {
  return (
    <div className="team-main-container">
      <Nav />
      <h4 className="Adbilbet-team">Conoce al equipo AdilBet</h4>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member">
            <div className="cntimgandphoto">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-photo"
              />
              <div className="member-info">
                <h6 className="name-member">{member.name}</h6>
                <p className="ocupation">{member.ocupation}</p>
              </div>
            </div>
            <p className="lema">"{member.lema}"</p>
            <div className="GHyLDn">
              <a href={member.linkedin} className="-linkedin">
                <AiFillLinkedin />
              </a>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <a href={member.github}>
                <AiFillGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="team-description">
        <p className="description-text">
          Formado por talentosos estudiantes altamente comprometidos con el
          aprendizaje y crecimiento personal y profesional, nuestro equipo
          brinda y aplica sus conocimientos en diferentes áreas del desarrollo,
          desde el front-end hasta el back-end para lograr la creación de
          soluciones tecnológicas de alta calidad, es asi como presentamos la
          página de apuestas deportivas <b>ADILBET</b>. Estamos orgullosos de
          ser parte de un equipo tan talentoso, empático y dedicado, y estamos
          seguros de que nuestra experiencia en este proyecto y en <b>HENRY{" "}
          Bootcamp</b> nos permitirá enfrentar de la mejor manera cualquier reto en
          los proyectos en que participemos como programadores.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
