import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "./Header";

import {
  Box,
  Button,
  Center,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";

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
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            <Icon
              color="gray.500"
              size="5"
              as={<MaterialCommunityIcons name="account" />}
            />
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => {
              if (name === "Home") {
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
                      props.navigation.navigate(name);
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
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Labels
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Family
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Friends
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Work
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default function CustomDrawer(props) {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerPosition: "right",
          header: ({ navigation, options }) => {
            return <Header navigation={navigation} />;
          },
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        {props.screens.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
        <Drawer.Screen name="Inbox" component={Component} />
        <Drawer.Screen name="Outbox" component={Component} />
        <Drawer.Screen name="Favorites" component={Component} />
        <Drawer.Screen name="Archive" component={Component} />
        <Drawer.Screen name="Trash" component={Component} />
        <Drawer.Screen name="Spam" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
