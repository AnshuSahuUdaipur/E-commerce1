import React, { useContext } from 'react';
import ProductItemContext from '../../contextAPI/ProductItemContext';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateProduct } = useContext(ProductItemContext);
  const product = location.state?.product;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const updatedProduct = {
      ...product, // Retain existing product data
      productName: e.target.productName.value,
      brand: e.target.brand.value,
      price: parseFloat(e.target.price.value),
      category: e.target.category.value,
      stock: parseInt(e.target.stock.value),
      rating: parseFloat(e.target.rating.value),
      // Handle image upload if necessary
    };

    updateProduct(updatedProduct); // Update the product in context
    navigate('/productitem-list'); // Navigate back to the product list
  };

  return (
    <div className="flex gap-8 p-7">
      {/* Left Side Div for displaying the product */}
      <div className="w-[30%] bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold">Product Details</h2>
        <p><strong>Name:</strong> {product?.productName}</p>
        <p><strong>Brand:</strong> {product?.brand}</p>
        <p><strong>Price:</strong> ${product?.price}</p>
        <p><strong>Category:</strong> {product?.category}</p>
        <p><strong>Stock:</strong> {product?.stock}</p>
        <p><strong>Rating:</strong> {product?.rating}</p>
        {/* Add an image display here if necessary */}
      </div>

      {/* Right Side Div for the form */}
      <div className="w-[70%] bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold">Edit Product</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name:
              <input
                type="text"
                name="productName"
                defaultValue={product?.productName}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand:
              <input
                type="text"
                name="brand"
                defaultValue={product?.brand}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price:
              <input
                type="number"
                name="price"
                defaultValue={product?.price}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category:
              <input
                type="text"
                name="category"
                defaultValue={product?.category}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock:
              <input
                type="number"
                name="stock"
                defaultValue={product?.stock}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating:
              <input
                type="number"
                step="0.1"
                name="rating"
                defaultValue={product?.rating}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
