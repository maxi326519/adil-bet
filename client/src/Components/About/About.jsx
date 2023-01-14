import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./About.css";

const teamMembers = [
  {
    name: "Laura Valencia Polo",

    image: require("../../Assets/Images/avatar-perfil-girl.png"),
    linkedin: "https://www.linkedin.com/in/laura-valencia-polo",
    github: "https://github.com/lauravalenciapolo",
  },
  {
    name: "Luis Rodríguez",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/luis-rodriguez",
    github: "https://github.com/LuisRodriguzz",
  },
  {
    name: "Maximiliano García",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/maxi326519",
  },
  {
    name: "Manuel Villalobos",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/manuord",
  },
  {
    name: "Carlos Ciliberti",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/calituz",
  },
  {
    name: "Gastón Alonso",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/luis-rodriguez",
    github: "https://github.com/GastonA95",
  },
  {
    name: "Fabián Tinjacá",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin: "https://www.linkedin.com/in/luis-rodriguez",
    github: "https://github.com/fabiangif",
  },
  {
    name: "Juan Carlos Gómez",
    image: require("../../Assets/Images/avatar-perfil-png.png"),
    linkedin:
      "https://www.linkedin.com/in/juan-carlos-gómez-cucaita-4677a218b/",
    github: "https://github.com/REALCHARLEX",
  },
];

const Team = () => {
  return (
    <div className="team-main-container">
      <Nav />
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-photo"
            />
            <h3>{member.name}</h3>
            <div className="GHyLDn">
              <a href={member.linkedin}>
                <AiFillLinkedin />
              </a>
              <a href={member.github}>
                <AiFillGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
