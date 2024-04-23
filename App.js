import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomDrawer from "./components/Drawer";
import { ProductProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { UserProductsProvider } from "./context/UserProductsContext";

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <ProductProvider>
      <UserProvider>
        <UserProductsProvider>
          <NavigationContainer>
            <NativeBaseProvider>
              <View style={styles.main}>
                <StatusBar style="light" />
                <CustomDrawer />
              </View>
            </NativeBaseProvider>
          </NavigationContainer>
        </UserProductsProvider>
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
