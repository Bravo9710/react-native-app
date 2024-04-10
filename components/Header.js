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

// export default function Header2({ navigation }) {
function Header2({ navigation }) {
  const handleLogoPress = () => {
    console.log("first");
    Toast.show({ description: "Hello world" });
    // Navigate to the homepage here
    // navigation.navigate("Home"); // Replace 'Home' with the name of your homepage screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Box>
        <Menu
          w="300"
          trigger={(triggerProps) => {
            return (
              <IconButton
                accessibilityLabel="More options menu"
                {...triggerProps}
                size={"auto"}
                variant="subtle"
                style={{ padding: 5 }}
                icon={<Entypo name="menu" size={35} color="blue" />}
              />
            );
          }}>
          <Menu.Item>Protein</Menu.Item>
          <Menu.Item>Vegan</Menu.Item>
          <Menu.Item>Keto</Menu.Item>
          <Menu.Item>Gluten-free</Menu.Item>
          <Menu.Item>Pescatarian</Menu.Item>
          <Menu.Item>Creatine</Menu.Item>
          <Menu.Item>Lactose</Menu.Item>
          <Menu.Item>Cookie</Menu.Item>
        </Menu>
      </Box>
    </View>
  );
}

export default function Header() {
  const handleLogoPress = () => {
    console.log("first");
    Toast.show({ description: "Hello world" });
    // Navigate to the homepage here
    // navigation.navigate("Home"); // Replace 'Home' with the name of your homepage screen
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
            <Icon as={MaterialIcons} name="favorite" size="lg" color="white" />
          }
        />
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
