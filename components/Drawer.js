import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Header from "./Header";

global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Home":
      return "home";
    case "Profile":
      return "account";
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Settings":
      return "cog";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const { user } = useUser();

  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" mx="1">
        <Box px="4">
          {user ? (
            <>
              <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
                {`${user.first_name} ${user.last_name}`}
              </Text>
              <Text
                fontSize="12"
                color="gray.500"
                fontWeight="400"
                fontStyle={"italic"}>
                {`${user.email}`}
              </Text>
            </>
          ) : (
            <Button onPress={() => props.navigation.navigate("Sign In")}>
              Sign in
            </Button>
          )}
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => {
              if (
                name === "Home" ||
                name === "Cart" ||
                name === "Sign In" ||
                name === "Sign Up"
              ) {
                return null;
              } else {
                return (
                  <Pressable
                    key={index}
                    px="5"
                    py="3"
                    rounded="md"
                    bg={
                      index === props.state.index
                        ? "rgba(6, 182, 212, 0.1)"
                        : "transparent"
                    }
                    onPress={(event) => {
                      !user && name === "Profile"
                        ? props.navigation.navigate("Sign In")
                        : props.navigation.navigate(name);
                    }}>
                    <HStack space="7" alignItems="center">
                      <Icon
                        color={
                          index === props.state.index
                            ? "primary.500"
                            : "gray.500"
                        }
                        size="5"
                        as={<MaterialCommunityIcons name={getIcon(name)} />}
                      />
                      <Text
                        fontWeight="500"
                        color={
                          index === props.state.index
                            ? "primary.500"
                            : "gray.700"
                        }>
                        {name}
                      </Text>
                    </HStack>
                  </Pressable>
                );
              }
            })}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default function CustomDrawer(props) {
  const [searchText, setSearchText] = useState("");

  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ route }) => ({
          drawerPosition: "right",
          header: ({ navigation, options }) => {
            return (
              <Header
                navigation={navigation}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            );
          },
        })}>
        <Drawer.Screen name="Home" initialParams={{ searchText: searchText }}>
          {(props) => <HomeScreen searchText={searchText} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Sign In" component={SignInScreen} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        <Drawer.Screen name="Favorites" component={Component} />
        <Drawer.Screen name="Inbox" component={Component} />
        <Drawer.Screen name="Outbox" component={Component} />
        <Drawer.Screen name="Settings" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
