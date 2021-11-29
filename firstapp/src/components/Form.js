import { useState } from "react"; // importando o hook useState do React

function Form() {
  function cadastrarUsuario(e) {
    // Evento de execução
    e.preventDefault(); // Pára o envio do formulário pro back-end e mantém no front
    // console.log(name);
    console.log(`Usuário "${name}" foi cadastrado com a senha "${password}".`);
  }
  // Usando o hook useState
  const [name, setName] = useState(); // método que inicia quando o componete for incializado
  const [password, setPassword] = useState(); // método que inicia quando o componete for incializado

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            // value={name} // default value do useState: útil quando formos editar formuário preenchido anteriormente
            //cada letra digitado no campo modificará o valor do state
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
