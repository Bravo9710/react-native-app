import { StatusBar } from "expo-status-bar";
import { Button, NativeBaseProvider, Toast } from "native-base";
import { NativeModules, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.main}>
        <Header />
        <View style={styles.container}>
          <Text style={{ color: "#ddd" }}>Our first app</Text>
          <Button
            mt={5}
            onPress={() => Toast.show({ description: "Hello world" })}>
            Click Me
          </Button>

          {/* Android's default status bar */}
          <StatusBar style="light" />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: StatusBarManager.HEIGHT + 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
