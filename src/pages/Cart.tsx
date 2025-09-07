import { CartDesktop } from "@components/cart/CartDesktop";
import { CartPhone } from "@components/cart/CartPhone";
import { useMediaQuery } from "react-responsive";

export const Cart = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <CartDesktop /> : <CartPhone/>;
};