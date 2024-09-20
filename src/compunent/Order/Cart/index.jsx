import React, { useContext } from 'react';
import ProductItemContext from '../../../contextAPI/ProductItemContext';
import { Navigate, useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cart, carddelete } = useContext(ProductItemContext);
  const navigate = useNavigate();
  const ContinewShopping= ()=>{
    navigate('/product-Grid')
  }

  const OrderCheckOut= ()=>{
    navigate('/order-checkout')
  }
  return (
    <div className="flex p-6">
      {/* Left Side - Cart Items */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <h1 className="col-span-full text-2xl font-semibold mb-4">Cart Page</h1>
        {cart.map((product) => (
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
              <button className="text-red-500 hover:text-red-700 flex items-center" onClick={() => carddelete(product.productName)}>
                <i className="ri-delete-bin-line text-lg"></i>
                <span className="ml-2 text-sm">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Additional Content */}
      <div className="flex flex-col ml-6 space-y-4">
        <div className="bg-[#FF6C2F] text-white w-[25vw] rounded-lg h-[30vh]  shadow-lg p-4">
          <h2 className="text-lg text-center font-semibold">Have A Promo Code</h2>
          <div className='flex gap-5 text-center'>
            <button className='bg-[#FB8E61] h-[35%] w-[50%] rounded-lg mt-16'>CODE123</button>
            <button className='bg-white text-black h-[35%] w-[30%] rounded-lg mt-16'>Apply</button>
          </div>
          {/* Add more summary details if needed */}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold">Promotions</h2>
          <p>Check out our latest offers!</p>
          {/* Add more promotion details if needed */}
        </div>

        <div className='flex gap-3'>
          <button onClick={ContinewShopping} className='h-10 w-44 rounded-md bg-[#FB8E61]'>Continew Shopping</button>
          <button onClick={OrderCheckOut} className='h-10 w-44 rounded-md bg-green-400 '>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
