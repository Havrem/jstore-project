import { ProductDesktop } from "@components/product/ProductDesktop";
import { ProductPhone } from "@components/product/ProductPhone";
import { useMediaQuery } from "react-responsive";

export const Product = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <ProductDesktop /> : <ProductPhone />;
};