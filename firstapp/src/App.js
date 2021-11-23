import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const name = 'Maria'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName name="Carlos" />
      <SayMyName name="Solange" />
      <SayMyName name={name} />
      <Pessoa name="Carlos" idade="34" profissao="TI" foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
