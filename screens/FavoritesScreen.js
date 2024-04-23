import List from "../components/List";
import { useUserProducts } from "../context/UserProductsContext"; // Note the correct import

export default function FavoritesScreen() {
  const { userProducts, setUserProducts } = useUserProducts();

  return <List title="Favorites" userProducts={userProducts.favorites} />;
}
