import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Menu,
  NativeBaseProvider,
  StatusBar,
  Text,
  Toast,
  VStack,
} from "native-base";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header(props) {
  const handleLogoPress = () => {
    props.navigation.navigate("Home");
  };

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
            <Icon as={MaterialIcons} name="search" size="lg" color="white" />
          }
        />
        <IconButton
          icon={
            <Icon
              as={MaterialIcons}
              name="shopping-cart"
              size="lg"
              color="white"
            />
          }
        />
        <IconButton
          icon={<Icon size="lg" as={MaterialIcons} name="menu" color="white" />}
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
