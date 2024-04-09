// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NativeModules, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import SecondaryScreen from "./screens/SecondaryScreen";

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.main}>
        <StatusBar style="light" />
        <Header />
        <HomeScreen />
        {/* <SecondaryScreen /> */}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: StatusBarManager.HEIGHT + 5,
  },
});
