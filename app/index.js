import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from "react-native";
import CustomDrawer from "../components/Drawer";
import HomeScreen from "../screens/HomeScreen";
import SecondaryScreen from "../screens/SecondaryScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View style={styles.main}>
          {/* <StatusBar style="light" /> */}
          <CustomDrawer
            screens={[
              { name: "Home", component: HomeScreen },
              { name: "Secondary", component: SecondaryScreen },
              { name: "Sign In", component: SignInScreen },
              { name: "Sign Up", component: SignUpScreen },
            ]}
          />
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 5,
  },
});
