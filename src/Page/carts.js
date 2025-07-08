import CartProducts from "../components/CartProducts";
import Payments from "../components/Payment";

const Cart = ()=>{
    return(

        <div className="cart-container">
            <CartProducts />
            <Payments />
       
        </div>

        

    )

    
}

export default Cart;