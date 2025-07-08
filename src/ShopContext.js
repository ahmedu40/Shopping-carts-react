import { Children, createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";
import Product from "./components/Product";
import Products from "./components/Products";
import { type } from "@testing-library/user-event/dist/type";

  const ShopContext = createContext(initialState);

 export const ShopProvider = ({children}) => {
    
     const [state, dispatch] = useReducer(shopReducer, initialState);

     const addToCart = (product) => {

        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct);

        dispatch({
            type:"ADD-TO-CART",
            payload: {

                products:updatedProduct
            }
        })
     }

     const RemoveFromCart = (product) => {

        const updatedProduct = state.products.filter(p => p.id !== product.id);
        calculateTotal(updatedProduct);
        dispatch({

            type: "REMOVE-FROM-CART",
            payload: {
                products : updatedProduct
            }
        })


     }

     const calculateTotal = (Products) => {

        let total = 0;

        Products.forEach(pro => {
            total += pro.price;
        });

        dispatch({
            type:"CALCULATE_TOTAL_PRICE",
            payload: total,
        })
     }

const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

    const values = {
        products: state.products,
        total:state.total,
        addToCart,
        RemoveFromCart ,
        clearCart,
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>
  }

  const useShop = () => {

    const context = useContext(ShopContext);
    if(context === undefined){
        throw new Error("context mus be used inside shopContext");

        
    }

    return context
  }

  export default useShop;