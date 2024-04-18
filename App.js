import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomDrawer from "./components/Drawer";
import { UserProvider } from "./context/UserContext";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <View style={styles.main}>
            <StatusBar style="light" />
            <CustomDrawer
              screens={[
                { name: "Home", component: HomeScreen },
                { name: "Profile", component: ProfileScreen },
                { name: "Sign In", component: SignInScreen },
                { name: "Sign Up", component: SignUpScreen },
              ]}
            />
          </View>
        </NativeBaseProvider>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 5,
  },
});
