import { Box, Center, Heading, ScrollView, VStack } from "native-base";
import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";

export default function HomeScreen(props) {
  const { products, setProducts } = useProducts();

  // Filtered products based on search text
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(props.searchText.toLowerCase()),
  );

  return (
    <ScrollView>
      <VStack py={6}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Box pb={5} key={index}>
              <Card product={product} />
            </Box>
          ))
        ) : (
          <Center py={100} h={"100%"}>
            <Heading>No Products Found</Heading>
          </Center>
        )}
      </VStack>
    </ScrollView>
  );
}
