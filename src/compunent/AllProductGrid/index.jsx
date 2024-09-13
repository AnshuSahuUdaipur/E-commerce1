import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductGrid from '../ProductGrid';
const AllProductGrid = () => {

    const navigate = useNavigate();

    const g = () => {
      navigate('/product-form');
    };

  return (
    <div className="text-black w-full bg-zinc-200">
    <div className="flex text-xl font-semibold justify-between p-4 items-center bg-white shadow-md border-b border-gray-300">
      <h1 className="text-gray-900">All Product List</h1>
      <div className="flex gap-4 text-[18px]">
        <Link to="/product-form">
          <button onClick={g} className="text-black bg-green-400 hover:bg-blue-600  font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            New Product
          </button>
        </Link>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          This Month
        </button>
      </div>
    </div>



    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div
    key="1"
    className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex flex-col"
  >
    <img
      className="w-full h-40 object-cover"
      src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
      alt="Product 1"
    />
    <div className="p-4 flex-1">
      <h2 className="text-lg font-semibold text-gray-800">Product 1</h2>
      <p className="text-gray-600 text-sm mt-1">$19.99</p>
      <p className="text-gray-600 text-sm mt-1">Stock: 120</p>
      <p className="text-gray-600 text-sm mt-1">Category: Electronics</p>
      <div className="flex items-center mt-2">
        <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-md">4.5 *</span>
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

  <div
    key="2"
    className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex flex-col"
  >
    <img
      className="w-full h-40 object-cover"
      src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-2.png"
      alt="Product 2"
    />
    <div className="p-4 flex-1">
      <h2 className="text-lg font-semibold text-gray-800">Product 2</h2>
      <p className="text-gray-600 text-sm mt-1">$29.99</p>
      <p className="text-gray-600 text-sm mt-1">Stock: 75</p>
      <p className="text-gray-600 text-sm mt-1">Category: Fashion</p>
      <div className="flex items-center mt-2">
        <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-md">4.0 *</span>
        <p className="ml-2 text-gray-600 text-sm">42 Reviews</p>
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

 

</div>















    <ProductGrid/>
         
    </div>
  )
}

export default AllProductGrid