import AsyncStorage from "@react-native-async-storage/async-storage";

// Retrieve user information from AsyncStorage
export const fetchProducts = async (setProducts) => {
  try {
    const response = await fetch("http://192.168.0.105:5000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    if (data) {
      setProducts(data);
    }
  } catch (error) {
    console.error("Error fetching products data:", error);
  }
};
