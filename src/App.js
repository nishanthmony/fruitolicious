import {useState} from 'react'
import './App.css';
import Preloader from './component/preloader';

function App() {
  const [text, count] = useState(0)
  const incval=() => {
    count(text+1)
  }
  const decval = () => {
    count(text-1)
  }

  return (
    <div className="App">

      <>
      <Preloader/>
      <div>
        <h1>FRUIT - O - LICIOUS</h1>
      </div>
      </>
      <button onClick={incval} className='incButton'>+</button>
      <h2>{text}</h2>
      <button onClick={decval} className='decButton'>-</button>
    </div>
  );
}

export default App;
