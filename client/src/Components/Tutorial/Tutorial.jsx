import React from "react";
import "./Tutorial.css";
import Accordion from "react-bootstrap/Accordion";
import wallet from "../../Assets/svg/Nav/wallet.svg";

export default function Promotions() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Como registrarse?</Accordion.Header>
        <Accordion.Body>
          En la parte superior derecha de la aplicación, encontrarás un botón
          con el texto "Registrar", al dar click te mostrará un formulario,
          llénalo con tus datos y oprime "Regístrate", o puedes iniciar sesión
          con google en el botón que está abajo, en el siguiente formulario
          selecciona "continuar con google", selecciona tu cuenta y listo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Como iniciar sesion?</Accordion.Header>
        <Accordion.Body>
          En la parte superior derecha de la aplicación, encontraras un boton de
          "inicio", al darle click te redireccionara para que puedas iniciar
          sesion ingrsanto tu mail y contraseña manualmente o puedes seleccionar
          la opcion de "iniciar con Google".Si aun no estas registrado, deberas
          hacerlo para poder ingresar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Como hacer apuesta?</Accordion.Header>
        <Accordion.Body>
          Para hacer una apuesta, deberas dirigirte a la pagina
          principal("Home"), ahi encontraras todos los partidos. Una vez elegido
          el equipo por el cual quieres apostar, deberas darle click al boton
          "Apostar", te saldra un menu de opciones en el cual tienes que
          ingresar el monto que quieres apostar y seleccionar el equipo.Tambien
          podras hacer la apuesta haciendo click sobre la tarjeta del partido,
          esta te permitira ver los detalles y tambien hacer tu apuesta. Para
          poder realizarla deberas contar con saldo en tu billetera.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Como ingresar fondos a billetera?</Accordion.Header>
        <Accordion.Body>
          Debera presionar sobre el siguiente logo{" "}
          <img src={wallet} alt="wallet" className="wallet" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
