import { Banner } from "@components/Banner";
import styles from "@css/Cart.module.scss";
import { CartItemCard } from "@components/card/CartItemCard";
import { useCart } from "contexts/CartContext";
import { useAuth } from "contexts/AuthContext";
import { toast } from "react-toastify";
import { order } from 'hooks/useOrder';

export const CartDesktop = () => {
  const { subtotal, items, clear } = useCart();
  const { isLoggedIn } = useAuth();

  const handlePlaceOrder = async () => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to place an order!")
    } else {
      try {
        await order(items);

        clear();
        toast.success("Order placed!")
      } catch (err) {
        toast.error("Could not place order.")
      }
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
                <CartItemCard key={li.id} lineItem={li} />
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