import './App.css';
import { Navbar } from './component/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {Cart} from './pages/cart/cart.jsx'
import {Shop} from './pages/shop/shop.jsx'
import './context/shop-context'
import { ShopContextProvider } from './context/shop-context';

function App() {
  

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element = {< Shop/>}/>
            <Route path = "/cart" element = {< Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
