import Product from "./Product";
import "../style.css";

const products = [
  {
    id: 2,
    name: "Pizza",
    urlImage: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1.25,
  },
  {
    id: 3,
    name: "Burger",
    urlImage: "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 0.95,
  },
  {
    id: 4,
    name: "Fruits",
    urlImage: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 0.85,
  },
{
  id: 5,
  name: "Grilled Fish",
  urlImage: "https://images.pexels.com/photos/3296274/pexels-photo-3296274.jpeg?auto=compress&cs=tinysrgb&w=600",
  price: 1.75,
},
  {
    id: 6,
    name: "Pasta",
    urlImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1.10,
  },
  {
    id: 7,
    name: "Salad",
    urlImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 0.65,
  },
];


const Products = () => {

    return(

        <div className="grid">
        {
        products.map((product) => (
        
        <Product key={product.id} product={product} />
          
         
            

        ))}

         </div>
    )

}

export default Products;