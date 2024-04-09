import { Entypo } from "@expo/vector-icons";
import { Center, IconButton, Toast, VStack } from "native-base";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({ navigation }) {
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
      <Center>
        <VStack space={4} alignItems="center">
          <IconButton
            size={"auto"}
            variant="subtle"
            style={{ padding: 5 }}
            icon={<Entypo name="menu" size={35} color="blue" />}
          />
        </VStack>
      </Center>
    </View>
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
    width: 65,
    height: 65,
    resizeMode: "contain",
  },
});
