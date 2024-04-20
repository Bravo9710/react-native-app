import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserProductsContext = createContext();

export const UserProductProvider = ({ children }) => {
  const [userProducts, setUserProducts] = useState({
    cart: [],
    favorites: [],
  });

  useEffect(() => {
    getUserProductsFromLocalStorage();
  }, []);

  useEffect(() => {
    setUserProductsInLocalStorage();
  }, [userProducts]);

  const setUserProductsInLocalStorage = async () => {
    try {
      await AsyncStorage.setItem("userProducts", JSON.stringify(userProducts));

      // For clear local storage manually after app reload (R in console)
      // TO BE REMOVED
      // await AsyncStorage.removeItem("userProducts");
      ///////////////////////
    } catch (error) {
      console.error("Cant add product to local storage:", error.message);
    }
  };

  const getUserProductsFromLocalStorage = async () => {
    try {
      const userProductsJSON = await AsyncStorage.getItem("userProducts");
      if (userProductsJSON) {
        setUserProducts(JSON.parse(userProductsJSON));
      }
    } catch (error) {
      console.error("Cant get products from local storage:", error.message);
    }
  };

  return (
    <UserProductsContext.Provider value={{ userProducts, setUserProducts }}>
      {children}
    </UserProductsContext.Provider>
  );
};

export const useUserProducts = () => useContext(UserProductsContext);
