export const addToProducts = (
  target,
  setUserProducts,
  prevUserProducts,
  product,
) => {
  setUserProducts((prevUserProducts) => {
    // Check if the product already exists in the target array
    const existingProductIndex = prevUserProducts[target].findIndex(
      (p) => p._id === product._id,
    );

    if (existingProductIndex !== -1) {
      // If the product exists in favorites, do nothing
      if (target === "favorites") {
        return prevUserProducts;
      }

      // If the product exists in cart, increase its count by 1
      if (target === "cart") {
        const updatedCart = [...prevUserProducts[target]];
        updatedCart[existingProductIndex].count += 1;
        return {
          ...prevUserProducts,
          cart: updatedCart,
        };
      }
    }

    // If the product doesn't exist, add it to the target array
    product.count = 1;
    return {
      ...prevUserProducts,
      [target]: [...prevUserProducts[target], product],
    };
  });
};
