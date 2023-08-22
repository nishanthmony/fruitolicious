import {useState} from 'react'
import './App.css';
import { Navbar } from './component/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

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
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/"/>
          <Route path = "/cart"/>
        </Routes>
      </Router>
      <button onClick={incval} className='incButton'>+</button>
      <h2>{text}</h2>
      <button onClick={decval} className='decButton'>-</button>
    </div>
  );
}

export default App;
