import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomDrawer from "./components/Drawer";
import { ProductProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { UserProductProvider } from "./context/UserProductsContext";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  return (
    <ProductProvider>
      <UserProvider>
        <UserProductProvider>
          <NavigationContainer>
            <NativeBaseProvider>
              <View style={styles.main}>
                <StatusBar style="light" />
                <CustomDrawer
                  screens={[
                    { name: "Home", component: HomeScreen },
                    { name: "Profile", component: ProfileScreen },
                    { name: "Cart", component: CartScreen },
                    { name: "Sign In", component: SignInScreen },
                    { name: "Sign Up", component: SignUpScreen },
                  ]}
                />
              </View>
            </NativeBaseProvider>
          </NavigationContainer>
        </UserProductProvider>
      </UserProvider>
    </ProductProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 5,
  },
});
