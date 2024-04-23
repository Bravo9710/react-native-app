import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { useUserProducts } from "../context/UserProductsContext.js";

export default function ListItem(props) {
  const { userProducts, setUserProducts } = useUserProducts();

  const handleRemoveItem = () => {
    const newCart = userProducts.favorites.filter(
      (item) => item._id !== props.product._id,
    );
    setUserProducts({ ...userProducts, favorites: newCart });
  };

  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "muted.50",
      }}
      borderColor="muted.800"
      pl={["0", "4"]}
      pr={["0", "5"]}
      py="2">
      <HStack
        space={[2, 3]}
        justifyContent="space-between"
        alignItems={"center"}>
        <Avatar
          size="48px"
          source={{
            uri: props.product.imageUrl,
          }}
        />
        <Heading
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          fontSize={"xl"}
          bold>
          {props.product.name}
        </Heading>
        <Spacer />
        <Text
          fontSize="md"
          fontWeight={500}
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          textAlign="right">
          $
          {(props.product.onSale.status
            ? props.product.onSale.price
            : props.product.price
          ).toFixed(2)}
        </Text>
        <IconButton
          bg={"red.500"}
          icon={<Icon as={AntDesign} name="close" size="sm" color="white" />}
          onPress={() => {
            handleRemoveItem();
          }}
        />
      </HStack>
    </Box>
  );
}
