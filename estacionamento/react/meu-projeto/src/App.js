
import './App.css';

function App() {

  const nome = "Guilherme";
  const url = "https://via.placeholder.com/150/0000FF/808080?text=Quadrado"; // Cor personalizada (azul) e sem texto

  function soma(a,b){
    return a+b
  }
  return (
    <div className="App">
        <h1>Olá mundo</h1>
        <span>{nome}</span>

        <span>{soma(10,3)}</span>
       <img src={url} alt="imagem" />
    </div>
  );
}

export default App;
