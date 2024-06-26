import List from "../components/List";
import { useUserProducts } from "../context/UserProductsContext"; // Note the correct import

export default function CartScreen() {
  const { userProducts, setUserProducts } = useUserProducts();

  return <List title="Cart" userProducts={userProducts.cart} />;
}
