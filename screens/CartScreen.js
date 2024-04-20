import { Box, ScrollView } from "native-base";
import List from "../components/List";
import { useUserProducts } from "../context/UserProductsContext";

export default function CartScreen() {
  const { userProducts, setUserProducts } = useUserProducts();

  return <List userCartProducts={userProducts.cart} />;
}
