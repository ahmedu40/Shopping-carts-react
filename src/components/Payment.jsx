import { useState } from "react";
import useShop from "../ShopContext";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    edahab: false,
  };

  const [paymentMethod, setPaymentMethod] = useState(initialPayment);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [phone, setPhone] = useState("");
  const [placeholder, setPlaceholder] = useState("e.g. 61xxxxxxx");

  const { total, products, addToCart, RemoveFromCart } = useShop();

  const selectMethod = (method) => {
    setPaymentMethod({ ...initialPayment, [method]: true });
    setSelectedMethod(method);
    setPlaceholder(method === "edahab" ? "62xxxxxxx" : "61xxxxxxx");
  };

  const isPhoneValid = () => {
    if (selectedMethod === "edahab") return phone.startsWith("62");
    return phone.startsWith("61");
  };

  const clearCart = () => {
    products.forEach((product) => RemoveFromCart(product));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMethod) {
      alert("Fadlan dooro hab lacag bixin iyo geli lambarka.");
      return;
    }

  

    if (total === 0 || products.length === 0) {
      alert("Cart-iga waa maran! Ma jiraan wax lacag lagu bixiyo.");
      return;
    }

    let phones = "0614778941";

   if (selectedMethod === "edahab") {
      phones = "0624778941";
    } else {
      phones = "0614778941";
    }
    // USSD Code
    const ussdCode = `*712*${phones}*${total}#`;

    // Redirect user to phone dialer
    window.location.href = `tel:${ussdCode}`;

  setTimeout(() => {
    if (window.confirm("Ma lacagtii si guul ah u dirtay?")) {
      clearCart();
      alert("Mahadsanid! Order‑kaaga waa la diiwaangeliyey.");
    } else {
      alert("Fadlan isku day mar kale ama nala soo xiriir.");
    }
  }, 1000);
  };

  return (
    <div>
      <h2 className="title">Pay With</h2>
      <div className="Payment-Cards">
        <div
          className={`Payment_Card ${paymentMethod.evc && "selected"}`}
          onClick={() => selectMethod("evc")}
        >
          <h3>EVC Plus</h3>
        </div>
        <div
          className={`Payment_Card ${paymentMethod.zaad && "selected"}`}
          onClick={() => selectMethod("zaad")}
        >
          <h3>Zaad Service</h3>
        </div>
        <div
          className={`Payment_Card ${paymentMethod.edahab && "selected"}`}
          onClick={() => selectMethod("edahab")}
        >
          <h3>Edahab</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
     
        
        <button className="btn-proceed">Proceed</button>
      </form>

      <div className="total-price">Total Price: ${total}</div>
    </div>
  );
};

export default Payment;
