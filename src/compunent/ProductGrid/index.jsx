import React, { useContext } from "react";
import ProductItemContext from "../../contextAPI/ProductItemContext";

const ProductGrid = () => {
  const { products } = useContext(ProductItemContext);

  if (!products || products.length === 0) {
    return <div className="p-6 text-center text-gray-600">No data available</div>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex flex-col"
        >
          <img
            className="w-full h-40 object-cover"
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt={product.productName}
          />
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-800">{product.productName}</h2>
            <p className="text-gray-600 text-sm mt-1">${product.price}</p>
            <p className="text-gray-600 text-sm mt-1">Stock: {product.stock}</p>
            <p className="text-gray-600 text-sm mt-1">Category: {product.category}</p>
            <div className="flex items-center mt-2">
              <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-md">{product.rating} *</span>
              <p className="ml-2 text-gray-600 text-sm">55 Reviews</p>
            </div>
          </div>
          <div className="p-4 flex justify-between border-t border-gray-300">
            <button className="text-blue-500 hover:text-blue-700 flex items-center">
              <i className="ri-eye-line text-lg"></i>
              <span className="ml-2 text-sm">View</span>
            </button>
            <button className="text-red-500 hover:text-red-700 flex items-center">
              <i className="ri-delete-bin-line text-lg"></i>
              <span className="ml-2 text-sm">Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
