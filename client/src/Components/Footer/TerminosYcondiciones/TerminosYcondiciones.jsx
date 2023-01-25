import React from "react";
import Nav from "../../Nav/Nav";
import image from "../../../Assets/Images/titletyc.png";
import Footer from "../Footer";

import styles from "./TerminosYcondiciones.module.css";

export default function TerminosYcondiciones() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.cntimage}>
        <img src={image} alt="Not found" className={styles.image} />
      </div>
      <div>
        <h1>Terminos y Condiciones.</h1>
      </div>
      <div className={styles.cntTyC_text}>
        <p className={styles.TyC_text}>
          <h3>INTRODUCCIÓN</h3>
          <br />
          <p>
            1. Al utilizar, visitar y/o acceder a cualquier parte (incluidas,
            pero no limitadas a, subdominios, código fuente y/o API de la
            página, visible o no) del sitio Web o aplicación móvil de AdilBet
            ("el sitio Web"), y/o al registrarse en el sitio Web o aplicaciones
            de nuestra propiedad o bajo nuestra operación, se considera que el
            cliente está obligado a cumplir: (i) Estos Términos y Condiciones.
            La conformidad con los Términos no implica que estemos obligados a
            aceptar cualquier apuesta realizada por un jugador. Los
            participantes pueden realizar apuestas en los mercados/productos
            disponibles en el sitio Web. Sin embargo, solo se considerarán
            válidas y completadas tales apuestas y, por lo tanto, aprobadas por
            AdilBet cuando el cliente reciba la confirmación de AdilBet de
            aceptación de su apuesta.
          </p>
          <br />
          <p>
            2. Es necesario tener en cuenta que el derecho de acceder y/o
            utilizar el sitio Web (incluidos todos los productos ofrecidos por
            el mismo) puede ser ilegal en algunos países. Es responsabilidad del
            cliente asegurarse de que dicho acceso y/o utilización del sitio Web
            acata las leyes aplicables de la jurisdicción de su país de
            residencia y que las apuestas no son ilegales en el territorio en el
            que reside.
          </p>
          <br />
          <p>
            3. AdilBet se compromete a ofrecer un excelente servicio de atención
            al cliente. Como parte de dicho compromiso, AdilBet promueve el
            juego responsable. Para mayor información, por favor, haga click
            aquí. Aunque AdilBet preservará e implementará medidas para
            garantizar el cumplimiento de las políticas de juego responsable,
            AdilBet no será en ningún modo responsable si un cliente sigue
            jugando y/o intenta utilizar el sitio Web con la deliberada
            intención de evitar las medidas puestas en práctica y/o en caso de
            que AdilBet sea incapaz de aplicar sus medidas/políticas por razones
            fuera del control razonable de AdilBet.
          </p>
          <br />
          <p>
            4. A menos que se especifique lo contrario, todas las cantidades
            publicadas en el sitio Web están expresadas en dolares ($USD). A
            efectos de estos Términos, todas las cantidades se expresan solo en
            dólares americanos ($USD). La cantidad correspondiente en su oneda
            local será calculada con base a la tasa de cambio del dólar de ese
            día.
          </p>
        </p>
      </div>
      <Footer />
    </div>
  );
}
