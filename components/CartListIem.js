import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { useUserProducts } from "../context/UserProductsContext.js";
const creatine = require("../assets/images/creatine.jpg");
const proteinBar = require("../assets/images/protein-bar.jpg");
const protein = require("../assets/images/protein.jpg");

const productImages = {
  "creatine.jpg": creatine,
  "protein-bar.jpg": proteinBar,
  "protein.jpg": protein,
};
export default function CartListItem(props) {
  const { userProducts, setUserProducts } = useUserProducts();
  const imageUrl = productImages[props.product.image];
  const handleDecrease = () => {
    const newCart = userProducts.cart.map((item) => {
      if (item._id === props.product._id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
    setUserProducts({ ...userProducts, cart: newCart });
  };

  const handleIncrease = () => {
    const newCart = userProducts.cart.map((item) => {
      if (item._id === props.product._id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setUserProducts({ ...userProducts, cart: newCart });
  };
  const handleRemoveItem = () => {
    const newCart = userProducts.cart.filter(
      (item) => item._id !== props.product._id
    );
    setUserProducts({ ...userProducts, cart: newCart });
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
      py="2"
    >
      <HStack space={[2, 3]} justifyContent="space-between">
        <Avatar size="48px" source={imageUrl} />
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {props.product.name + " x " + props.product.count}
          </Text>
          <HStack>
            <IconButton
              variant={"solid"}
              bg={"indigo.500"}
              mr={2}
              p={2}
              icon={
                <Icon as={FontAwesome6} name="minus" size="sm" color="white" />
              }
              onPress={() => {
                handleDecrease();
              }}
            />
            <IconButton
              variant={"solid"}
              bg={"indigo.500"}
              mr={2}
              p={2}
              icon={
                <Icon as={FontAwesome6} name="plus" size="sm" color="white" />
              }
              onPress={() => {
                handleIncrease();
              }}
            />
          </HStack>
        </VStack>
        <Spacer />
        <VStack justifyContent={"space-between"}>
          <Text
            fontSize="sm"
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            alignSelf="flex-end"
            textAlign="right"
          >
            $
            {(props.product.onSale.status
              ? props.product.onSale.price
              : props.product.price
            ).toFixed(2)}
          </Text>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
            textAlign="right"
          >
            Total:{" $"}
            {(
              (props.product.onSale.status
                ? props.product.onSale.price
                : props.product.price) * props.product.count
            ).toFixed(2)}
          </Text>
        </VStack>
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
