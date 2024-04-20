import { MaterialIcons } from "@expo/vector-icons";
import { Badge, HStack, Icon, IconButton, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useUserProducts } from "../context/UserProductsContext";

export default function Header(props) {
  const { userProducts, setUserProducts } = useUserProducts();
  const [itemCount, setItemCount] = useState(
    userProducts.cart.length > 0 ? count : 0,
  );

  const count = userProducts.cart.reduce(
    (total, item) => total + item.count,
    0,
  );

  const handleLogoPress = () => {
    props.navigation.navigate("Home");
  };

  const handleCartPress = () => {
    props.navigation.navigate("Cart");
  };

  useEffect(() => {
    if (userProducts.cart.length > 0) {
      setItemCount(count);
    }
  }, [userProducts]);

  return (
    <HStack
      bg="blue.600"
      px="1"
      py="3"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </HStack>
      <HStack>
        <IconButton
          icon={
            <Icon as={MaterialIcons} name="search" size="xl" color="white" />
          }
        />
        <VStack>
          <IconButton
            onPress={handleCartPress}
            icon={
              <Icon
                as={MaterialIcons}
                name="shopping-cart"
                size="xl"
                color="white"
              />
            }
          />
          {userProducts.cart && userProducts.cart.length > 0 && (
            <Badge
              pointerEvents="none"
              colorScheme="danger"
              rounded="full"
              position={"absolute"}
              bottom={1}
              right={0.5}
              zIndex={1}
              width={5}
              height={5}
              p={0}
              variant="solid"
              alignSelf="flex-end"
              textAlign={"center"}>
              <Text mt="-2dpx" color={"white"} fontSize={"xs"}>
                {itemCount}
              </Text>
            </Badge>
          )}
        </VStack>
        <IconButton
          icon={<Icon size="xl" as={MaterialIcons} name="menu" color="white" />}
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#22c",
    flexDirection: "row",
    width: "100%",
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
