import './App.css';
// import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const name = 'Maria'

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <SayMyName name="Carlos" />
      <SayMyName name="Solange" />
      <SayMyName name={name} />
      <Pessoa name="Carlos" idade="34" profissao="TI" foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
