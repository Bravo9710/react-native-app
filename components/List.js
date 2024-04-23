import { Button, FlatList, HStack, Heading, VStack } from "native-base";

import CartListItem from "./CartListIem";
import ListItem from "./ListIem";

export default function List(props) {
  return (
    <VStack p="4" h={"100%"}>
      <Heading pb="3">{props.title}</Heading>
      <FlatList
        data={props.userProducts}
        flex={1}
        h={"100%"}
        renderItem={({ item }) =>
          props.title === "Cart" ? (
            <CartListItem product={item} />
          ) : (
            <ListItem product={item} />
          )
        }
        keyExtractor={(item, index) => index}
      />
      {props.title === "Cart" && (
        <VStack>
          <HStack justifyContent={"space-between"} mt="3">
            <Heading color="coolGray.800">Total price:</Heading>
            <Heading color="coolGray.800">
              $
              {props.userProducts
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
      )}
    </VStack>
  );
}
