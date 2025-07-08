import useShop from "../ShopContext"
import Product from "./Product";

const CartProducts = () => {

    const {products , total,  RemoveFromCart} = useShop();

    return(
        
        <div className="cart-products">
            <h2>Cart Products</h2>
            {products.map((product) => (

                 <div className="cart-product">
                <div className="cart-title-img">
                    <img src={product.urlImage} alt="" />
                    <span>{product.name}</span>

                </div>

                <h5 className="price">${product.price}</h5>
                <span className="delete" onClick={()=> RemoveFromCart(product)}>Delete</span>
   </div>
            ))}

            <div className="total-price">Total Price : ${total}</div>
           </div>
    )
}

export default CartProducts;