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
    const newProduct = {
      productName,
      brand,
      price,
      category,
      stock,
      rating,
    };

    addProduct(newProduct);
    navigate("/productitem-list");
    // navigate("/product-Grid");
  };

  return (
    <div className="flex gap-8 p-7">
      {/* Left Side Div */}
      <div className="w-[30%] bg-gray-200 p-4 rounded-lg">
        {/* Image Display */}
        <div className="bg-white h-[45vh] p-4 rounded-lg shadow-md flex flex-col items-center">
          <img
            className="mb-4 w-auto h-[100vh] object-contain"
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt=""
          />

        </div>
        <p className="bg-green-600 mt-3 w-[100px] rounded-md">New Arrival</p>
        <h1 className="text-[30px] text-[#313B5E] mt-3 ">Men Black Slim T-Shirt</h1>
        <div className="mt-2 h-10 w-[22%] object-cover flex justify-center items-center">
          {/* Star Ratings */}
          {Array.from({ length: 4 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .587l3.668 7.428 8.232 1.194-5.95 5.781 1.406 8.204L12 18.896l-7.356 3.865 1.406-8.204-5.95-5.781 8.232-1.194z" />
            </svg>
          ))}
          <div>
            <p>4.5.........</p>
          </div>
        </div>

        <h1 className="text-[40px] text-[#4F5876]">$80.00</h1>


        <div className="flex flex-col">
            <div className="">
              <h1 className="mt-3 text-[15px]">Color</h1>
              <div className=" flex w-36 grid-cols-2 gap-2 p-2 mt-1">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="bg-[#BEC2C6]  w-[40px] h-[40px] rounded-lg p-2 flex justify-center items-center"
                  >
                    <div
                      className={`rounded-full w-5 h-5 ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="mt-3 text-[15px]">Size</h1>
              <div className="flex w-36 grid-cols-2 gap-2 p-2 mt-1">
                {Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="bg-[#BEC2C6] w-[40px] h-[40px] rounded-lg p-2 flex justify-center items-center"
                  >
                    <div
                      className={`rounded-full w-5 h-5 ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      {/* Right Side Div */}
      <div className="w-[80%] bg-white rounded-lg shadow-md p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
      <label className="block text-sm font-medium text-gray-700">
        Upload Image:
        <div className="mt-1 flex items-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex items-center justify-center w-full h-[200px] bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            <span className="text-gray-700">Choose Image</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 00-1 1v4H6a1 1 0 100 2h3v4a1 1 0 002 0v-4h3a1 1 0 100-2h-3V4a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <p className="mt-1 text-sm text-gray-500">Max size: 2MB</p>
      </label>
    </div>

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
      </div>
    </div>
  );
};

export default ProductForm;
