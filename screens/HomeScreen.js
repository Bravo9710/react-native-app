import { StatusBar } from "expo-status-bar";
import { Button, Toast } from "native-base";
import { NativeModules, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ddd" }}>Our first app</Text>
      <Button mt={5} onPress={() => Toast.show({ description: "Hello world" })}>
        Click Me
      </Button>

      {/* Android's default status bar */}
      {/* <StatusBar style="light" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
