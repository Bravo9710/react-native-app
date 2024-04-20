import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { useUser } from "../context/UserContext";

export default function ProfileScreen() {
  const { user, setUser } = useUser();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage data and user state
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      setUser(null);

      // Navigate to the sign-in screen upon successful logout
      navigation.navigate("Sign In");
    } catch (error) {
      console.error("Logout failed:", error);
      Toast.show({ description: "Logout failed", status: "error" });
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text>
            Welcome, {user.first_name} {user.last_name}
          </Text>
          <Text>Email: {user.email}</Text>
        </>
      )}
      <Button mt={5} onPress={handleLogout}>
        {user ? "Log out" : "Log in"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
