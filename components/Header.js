import { MaterialIcons } from "@expo/vector-icons";
import {
  Badge,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
} from "native-base";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useUserProducts } from "../context/UserProductsContext";

export default function Header(props) {
  const { userProducts, setUserProducts } = useUserProducts();
  const [showSearch, setShowSearch] = useState(false);
  const [searchBarHeight, setSearchBarHeight] = useState(0);
  const [itemCount, setItemCount] = useState(
    userProducts.cart.length > 0 ? count : 0,
  );
  const searchPosition = useRef(new Animated.Value(0)).current;
  const count = userProducts.cart.reduce(
    (total, item) => total + item.count,
    0,
  );

  useEffect(() => {
    if (userProducts.cart.length > 0) {
      setItemCount(count);
    }
  }, [userProducts]);

  const handleLogoPress = () => {
    props.navigation.navigate("Home");
  };

  const handleCartPress = () => {
    props.navigation.navigate("Cart");
  };

  const handleClearSearch = () => {
    props.setSearchText("");
  };

  const onLayoutSearchBar = (event) => {
    const { height } = event.nativeEvent.layout;
    setSearchBarHeight(height);
  };

  const toggleSearch = () => {
    props.setSearchText("");
    setShowSearch(!showSearch);

    Animated.parallel([
      Animated.timing(searchPosition, {
        toValue: showSearch ? 0 : searchBarHeight,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ marginBottom: searchPosition }}>
      <Animated.View
        onLayout={onLayoutSearchBar}
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 10,
          paddingVertical: 8,
          transform: [{ translateY: searchPosition }],
        }}>
        <Input
          placeholder="Search products..."
          width="100%"
          borderRadius="4"
          bg={"white"}
          py="2"
          px="1"
          fontSize="14"
          shadow={2}
          value={props.searchText}
          onChangeText={props.setSearchText}
          InputRightElement={
            <IconButton
              icon={<Icon as={MaterialIcons} name="close" size="sm" />}
              onPress={handleClearSearch}
            />
          }
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </Animated.View>
      <HStack
        bg="blue.600"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        position="relative">
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
              <Icon
                as={MaterialIcons}
                name="search"
                size="xl"
                color="white"
                onPress={toggleSearch} // Changed to toggle search
              />
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
            icon={
              <Icon size="xl" as={MaterialIcons} name="menu" color="white" />
            }
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HStack>
      </HStack>
    </Animated.View>
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
