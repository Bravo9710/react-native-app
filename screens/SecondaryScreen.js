import { StatusBar } from "expo-status-bar";
import { Button, NativeBaseProvider, Toast } from "native-base";
import { NativeModules, StyleSheet, Text, View } from "react-native";
const { StatusBarManager } = NativeModules;

export default function SecondaryScreen() {
  return (
    <NativeBaseProvider>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={{ color: "#ddd" }}>Our second screen</Text>
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
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
