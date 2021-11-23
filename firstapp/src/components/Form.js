function Form() {
  function cadastrarUsuario(e) {
    // Evento de execução
    e.preventDefault(); // Para o envio do formulário pro back-end e mantém no front
    console.log("Cadastrou o usuário.");
  }
  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
