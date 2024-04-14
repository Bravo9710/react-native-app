import { Button, Toast } from "native-base";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#111" }}>Our first app</Text>
      <Button mt={5} onPress={() => Toast.show({ description: "Hello world" })}>
        Click Me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
