import AsyncStorage from "@react-native-async-storage/async-storage";

// Retrieve user information from AsyncStorage
export const fetchUser = async (setUser) => {
  try {
    const userData = await AsyncStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
