import './App.css';
import { Navbar } from './component/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {Cart} from './pages/cart/cart.jsx'
import {Shop} from './pages/shop/shop.jsx'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {< Shop/>}/>
          <Route path = "/cart" element = {< Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
