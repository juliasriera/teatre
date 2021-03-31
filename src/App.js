
import './App.css';
import Mylinia from './linia.js'
import MyText from './text.js'

function App() {

  const textObra = MyText.map(item => <Mylinia item={item}/>)
  
  return (
    <div className="obra">
      <header className="App-header">
      {textObra}
      </header>
    </div>
  );
}

export default App;
