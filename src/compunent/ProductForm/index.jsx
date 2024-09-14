import React, { useContext, useState } from "react";
import ProductItemContext from "../../contextAPI/ProductItemContext";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const { addProduct } = useContext(ProductItemContext);
  const { Products } = useContext(ProductItemContext);
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a product object
    const newProduct = {
      productName,
      brand,
      price,
      category,
      stock,
      rating,
    };

    // Add the product using the context function My 
    addProduct(newProduct);
    console.log(newProduct, "new Por=dhsh");
    console.log("addprodut", addProduct);
    console.log("product", Products);
    // Clear form fields after submission
    // setProductName('');
    // setBrand('');
    // setPrice('');
    // setCategory('');
    // setStock('');
    // setRating('');
    navigate("/productitem-list");
    navigate("/product-Grid")
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Stock:
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="0"
            max="5"
            step="0.1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
