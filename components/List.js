import {
  Avatar,
  Box,
  Button,
  FlatList,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from "native-base";

import ListItem from "./ListIem";

export default function List(props) {
  return (
    <VStack p="4" h={"100%"}>
      <Heading pb="3">Cart</Heading>
      <FlatList
        data={props.userCartProducts}
        flex={1}
        h={"100%"}
        renderItem={({ item }) => <ListItem product={item} />}
        keyExtractor={(item, index) => index}
      />
      <VStack>
        <HStack justifyContent={"space-between"} mt="3">
          <Heading color="coolGray.800">Total price:</Heading>
          <Heading color="coolGray.800">
            $
            {props.userCartProducts
              .reduce((total, product) => {
                const price = product.onSale.status
                  ? product.onSale.price
                  : product.price;
                return total + price * product.count;
              }, 0)
              .toFixed(2)}
          </Heading>
        </HStack>
        <Button mt="4" colorScheme="indigo">
          Checkout
        </Button>
      </VStack>
    </VStack>
  );
}
