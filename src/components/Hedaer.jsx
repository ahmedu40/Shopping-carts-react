
import Cart from "../Page/carts";
import { Link } from 'react-router-dom';
import "../style.css";
import useShop from "../ShopContext";

const Hedaer = () => {

    const {products} = useShop();
    return(

        <div className="menu">
         
         <Link to="/" className="logo">Maandeeq Grains</Link>

         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/carts">Cart</Link>
         </div>

         <Link to="/carts"><span className="cart">{products.length}</span></Link>

        </div>
    )

}

export default Hedaer;