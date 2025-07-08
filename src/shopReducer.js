import Products from "./components/Products";

export const initialState = {

    products:[],
    total:0,

  }

  const shopReducer = (state, action) => {
    
    const { type, payload } = action;

    switch(type){

        case "ADD-TO-CART":
        return {
            ...state,
            products:payload.products,
        };

         case "REMOVE-FROM-CART":
        return {
            ...state,
            products:payload.products,
        };

        case "CALCULATE_TOTAL_PRICE":

        return{
            ...state,
            total: payload, 
        }
      


        default: 
        throw new Error("unknown reducer");

    }

  }

  export default shopReducer;