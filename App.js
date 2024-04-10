// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NativeModules, StyleSheet, View } from "react-native";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import SecondaryScreen from "./screens/SecondaryScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View style={styles.main}>
          <StatusBar style="light" />
          <Header />
          <Drawer />
          {/* <HomeScreen /> */}
          {/* <SecondaryScreen /> */}
          {/* <SignUpScreen /> */}
          {/* <SignInScreen /> */}
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: StatusBarManager.HEIGHT + 5,
  },
});
