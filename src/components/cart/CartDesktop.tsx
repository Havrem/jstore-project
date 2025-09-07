import { Banner } from "@components/Banner";
import styles from "@css/Cart.module.scss";
import { LineItemCard } from "@components/card/LineItemCard";
import { useCart } from "contexts/CartContext";
import { placeOrderApi } from "@assets/api/orders";

export const CartDesktop = () => {
  const { subtotal, items, clear } = useCart();

  const handlePlaceOrder = async () => {
    try {
      const response = await placeOrderApi({ items });
      clear();
      alert(`Order confirmed! ID: ${response.orderId}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong placing the order.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Banner />
      <h1>Cart</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {items.map((li) => (
                <LineItemCard key={li.id} lineItem={li} />
              ))}

              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <button className={styles.orderBtn} onClick={handlePlaceOrder}>Place order</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};