import React, { useState, createContext } from "react";
import ProductItemContext from "./ProductItemContext";

const ProductContextItemProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  const addProduct = (product) => {
    setProduct([...products, product]);
  };
  console.log(products, "in contect");
  return (
    <ProductItemContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductItemContext.Provider>
  );
};

export default ProductContextItemProvider;
