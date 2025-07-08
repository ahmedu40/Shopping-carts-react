import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product = ({product}) => {

    const {addToCart, products, total ,      RemoveFromCart} = useShop();
    const [isIncart, setisIncar] = useState(false);

    useEffect(() => {

        const iscart = products.filter((pro) => pro.id === product.id);

        if(iscart.length > 0){
            setisIncar(true);
        }

        else{
            setisIncar(false);
        }
    }, [products])

    const HandleAddToCart = () => {

            if(isIncart){
                RemoveFromCart(product);
            }else{
               addToCart(product);

                console.log(products);
            } 
             

       


    }

    return(
        
        <div className="card" style={{
            minHeight:"100%", 
            background:`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
            url(${product. urlImage})
            `, backgroundRepeat:"no-repeat",
            backgroundSize:"cover"}}>
            <div className="info">
                <span>{product.name}</span>
                <span>${product.price}</span>
            </div>

            <button className={`btn ${isIncart ? "btn-secondary" : "btn-primary"}`}
            onClick = {HandleAddToCart}>

              {isIncart ? "-" : "+"}
            </button>
        </div>
    )

    
}

export default Product;