import { useState } from "react";

function Condicional() {
  function enviarEmail(e) {
    e.preventDefault();
    console.log("Testando...");
  }
  return (
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input type="email" placeholder="Digite seu e-mail..." />
      </form>
      <button type="submit" nClick={enviarEmail}>
        Enviar e-mail
      </button>
    </div>
  );
}

export default Condicional;
