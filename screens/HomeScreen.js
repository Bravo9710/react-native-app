// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  Stack,
  Toast,
  VStack,
} from "native-base";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";

export default function HomeScreen() {
  const { products, setProducts } = useProducts();

  return (
    <ScrollView>
      <VStack>
        {products.map((product, index) => (
          <Box pb={5} key={index}>
            <Card product={product} />
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
