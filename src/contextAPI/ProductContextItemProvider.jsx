import React, { useState, createContext } from "react";
import ProductItemContext from "./ProductItemContext";

const ProductContextItemProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [formData, setFormData] = useState([
    {
      senderName: "",
      senderAddress: "",
      phoneNumber: "",
      invoiceNumber: "",
      invoiceDate: "",
      invoiceStatus: "",
      firstName: "",
      additionalInfo: "",
      productDetails: [],
    },
  ]);
  // const addform = (data) => {
  //   setFormData((privious) =>[...privious,data])
  // }
  // addform(formData);

  // const [formEntries, setFormEntries] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // const handleSubmit = () => {
    
  //   //.formEntries ka matlab h purana data to copy ho gya h or formdata ka matlab h jo format data me data h  usko bhi formentries me copy kar lo 
  //   setFormEntries((prevEntries) => [...prevEntries, formData]);
  //   setFormData({
  //     senderName: "",
  //     senderAddress: "",
  //     phoneNumber: "",
  //     invoiceNumber: "",
  //     invoiceDate: "",
  //     invoiceStatus: "",
  //     firstName: "",
  //     additionalInfo: "",
  //     productDetails: [],
  //   });
  // };




  // yaha tak invoice bala h  

  const addProduct = (product) => {
    setProduct([...products, product]);
  };
  console.log(products, "in contect");
  return (
    <ProductItemContext.Provider
      value={{ products, addProduct, formData, setFormData,handleChange }}
    >
      {children}
    </ProductItemContext.Provider>
  );
};

export default ProductContextItemProvider;
