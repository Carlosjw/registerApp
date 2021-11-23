import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Carlos'
  const newName = name.toUpperCase()

  function sum(a, b){ // enviando função no JSX
    return a + b // {sum(1, 2)}
  }

  const url = 'https://via.placeholder.com/150' // colocando imagem dinâmica no código

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}!</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
