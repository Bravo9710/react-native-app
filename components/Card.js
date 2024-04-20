import { MaterialIcons } from "@expo/vector-icons";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "native-base";
import { Image } from "react-native";
import { useUserProducts } from "../context/UserProductsContext";
import { addToProducts } from "../utils/addToProducts";

export default function Card(props) {
  const { userProducts, setUserProducts } = useUserProducts();

  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          {props.product.onSale.status && (
            <Center
              bg="rgba(226, 107, 60, 0.8)"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              borderTopRightRadius={"sm"}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              SALE
            </Center>
          )}
        </Box>
        <Stack p="4" space={1}>
          <Stack space={2}>
            <Heading size="md">{props.product.name}</Heading>
          </Stack>
          <Text fontWeight="400" color="coolGray.600" pb={5}>
            {props.product.description}
          </Text>
          <HStack justifyContent={"space-between"}>
            <HStack
              alignItems="baseline"
              space={4}
              justifyContent="space-between">
              {props.product.onSale.status && (
                <Text
                  strikeThrough
                  color="muted.600"
                  _dark={{
                    color: "black.500",
                  }}
                  fontSize={20}
                  fontWeight="500">
                  ${props.product.price.toFixed(2)}
                </Text>
              )}

              <Text
                color="black"
                _dark={{
                  color: "black.500",
                }}
                fontSize={25}
                fontWeight="500">
                $
                {props.product.onSale.status
                  ? props.product.onSale.price.toFixed(2)
                  : props.product.price.toFixed(2)}
              </Text>
            </HStack>

            <HStack space={2}>
              <Button
                variant="solid"
                bg="blue.600"
                onPress={() =>
                  addToProducts(
                    "cart",
                    setUserProducts,
                    userProducts,
                    props.product,
                  )
                }
                leftIcon={
                  <Icon as={MaterialIcons} name="shopping-cart" size="md" />
                }></Button>
              <Button
                variant="solid"
                bg="red.600"
                onPress={() =>
                  addToProducts(
                    "favorites",
                    setUserProducts,
                    userProducts,
                    props.product,
                  )
                }
                leftIcon={
                  <Icon as={MaterialIcons} name="favorite" size="md" />
                }></Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

const Example = () => {};
