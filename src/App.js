import { Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Hedaer from './components/Hedaer';
import Home from './Page/home';
import About from './Page/about';
import Contact from './Page/contact';
import Cart from './Page/carts';
import { ShopProvider } from './ShopContext';




function App() {
  return (
 <ShopProvider> 
      <div className='Container'>
        <Hedaer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/carts' element={<Cart/>}/>
        </Routes>
      </div>
    </ShopProvider>
  );
}

export default App;
