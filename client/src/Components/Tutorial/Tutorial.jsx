import React from "react";
import "./Tutorial.css";
import Accordion from "react-bootstrap/Accordion";
import wallet from "../../Assets/Images/wallet-tutorial.png";
import Nav from "../Nav/Nav";

export default function Promotions() {
  return (
    <div className="containerrrrrr">
      <div>
        <Nav />
      </div>
      <div className="container-accordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Como registrarse?</Accordion.Header>
            <Accordion.Body>
              En la parte superior derecha de la página, verás un botón con el
              texto <mark>"Registrar"</mark>, al dar click te mostrará un
              formulario, llénalo con tus datos y oprime "Regístrate", o puedes
              iniciar sesión con google en el botón que está abajo, en el
              siguiente formulario selecciona "continuar con google", selecciona
              tu cuenta y listo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Como iniciar sesión?</Accordion.Header>
            <Accordion.Body>
              En la parte superior derecha de la aplicación, encontrarás un
              boton de
              <mark>"inicio"</mark>, al darle click te redireccionará para que
              puedas iniciar sesión ingresando tu mail y contraseña manualmente
              o puedes seleccionar la opción de "iniciar con Google". Si aún no
              estás registrado, deberás hacerlo para poder ingresar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Como hacer apuestas?</Accordion.Header>
            <Accordion.Body>
              Para hacer una apuesta, deberás dirigirte a la página
              principal("Home"), ahí encontrarás todos los partidos. Una vez
              elegido el equipo por el cual quieres apostar, deberás darle click
              al boton
              <mark>"Apostar"</mark>, te saldrá un menú de ópciones en el cual
              tienes que ingresar el monto que quieres apostar y seleccionar el
              equipo. También podrás hacer la apuesta haciendo click sobre la
              tarjeta del partido, ésta te permitirá ver los detalles y también
              hacer tu apuesta. Para poder realizarla deberás contar con saldo
              en tu billetera.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Como ingresar fondos a billetera?
            </Accordion.Header>
            <Accordion.Body>
              Deberás presionar sobre el siguiente logo{" "}
              <img src={wallet} alt="wallet" className="walletacc" /> se
              desplegará un menú, en el cual vas a dar click al boton "Recargar
              Billetera", saldrá un formulario que deberás completar con tu
              nombre, email y datos de la tarjeta que vas a utilizar. Al
              finalizar te llegará un email al correo confirmando tu pago.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Como retirar fondos?</Accordion.Header>
            <Accordion.Body>
              Para retirar fondos debes presionar sobre el siguiente logo{" "}
              <img src={wallet} alt="wallet" className="walletacc" />, se
              desplegará un menú, en el cual debes dar click al botón "Retiros",
              verás una tarjeta que te pedirá el monto a retirar, tipo y número
              de documento y número de celular, completa la información y da
              click en enviar, listo, en las próximas 48 horas recibirás tu
              depósito.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
