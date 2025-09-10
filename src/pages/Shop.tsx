import { ProductDesktop } from "@components/product/ShopDesktop";
import { ProductPhone } from "@components/product/ShopPhone";
import { useMediaQuery } from "react-responsive";

export const Shop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <ProductDesktop /> : <ProductPhone />;
};