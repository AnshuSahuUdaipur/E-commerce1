import React, { useState } from "react";
import { useContext } from "react";
import ProductItemContext from "../../contextAPI/ProductItemContext";
const ProductDatials = () => {
  const [count, setCount] = useState(0);
  const {showProduct} = useContext(ProductItemContext)
  const [currentImage, setCurrentImage] = useState(
    "https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
  );
  
 
  console.log(showProduct,"this is show product")
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0); // Prevent negative counts
  };

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="ml-7 mt-7 flex h-full bg-white gap-8">

      {/* Left Side Div */}
      <div className="w-[50%] rounded-lg bg-white p-4 shadow-md">
        <div className="p-4">
          {/* Parent Div */}
          <div className="w-[32vw] h-[60vh] bg-gray-200 p-4 rounded-lg">
            {/* Child Div */}
            <div className="bg-white h-[55vh] p-4 rounded-lg shadow-md">
              <img className="mb-4" src={currentImage} alt="Current Product" />
            </div>
          </div>
          <div className="flex justify-between gap-2 mt-4">
            {/* Image Div 1 */}
            <button onClick={() => handleImageClick("https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png")} className="flex-1 mx-1">
              <img
                src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
                alt="Image 1"
                className="w-full h-auto rounded-md"
              />
            </button>
            {/* Image Div 2 */}
            <button onClick={() => handleImageClick("https://techzaa.getappui.com/larkon/admin/assets/images/product/p-10.png")} className="flex-1 mx-1">
              <img
                src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-10.png"
                alt="Image 2"
                className="w-full h-auto rounded-md"
              />
            </button>
            {/* Image Div 3 */}
            <button onClick={() => handleImageClick("https://techzaa.getappui.com/larkon/admin/assets/images/product/p-14.png")} className="flex-1 mx-1">
              <img
                src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-14.png"
                alt="Image 3"
                className="w-full h-auto rounded-md"
              />
            </button>
            {/* Image Div 4 */}
            <button onClick={() => handleImageClick("https://techzaa.getappui.com/larkon/admin/assets/images/product/p-13.png")} className="flex-1 mx-1">
              <img
                src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-13.png"
                alt="Image 4"
                className="w-full h-auto rounded-md"
              />
            </button>



          </div>

          <div className="flex h-16 gap-4 mt-4">
  <button className="bg-red-600  text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition">
    Add To Cart
  </button>
  <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-700 transition">
    Run Now
  </button>
</div>
        </div>
      </div>

      {/* Right Side Div */}
      <div className="w-[60%] rounded-lg h-full bg-white shadow-lg p-4">
        <p className="bg-green-600 w-[100px] rounded-md">New Arrival</p>
        <h1 className="text-[30px] text-[#313B5E] mt-3 ">

        {showProduct.productName ? showProduct.productName : "Men Black Slim T-Shirt:..."}
        </h1>
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

        <h1 className="text-[40px] text-[#4F5876]">{showProduct.price ? showProduct.price : "$ 800..."}</h1>

        <div className="flex">
          <div>
            <h1 className="mt-3 text-[15px]">Color</h1>
            <div className="grid w-36 grid-cols-2 gap-2 p-2 mt-1">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="bg-[#BEC2C6] w-[40px] h-[40px] rounded-lg p-2 flex justify-center items-center">
                  <div className={`rounded-full w-3 h-3 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}`} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="mt-3 text-[15px]">Size</h1>
            <div className="grid w-36 grid-cols-2 gap-2 p-2 mt-1">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="bg-[#BEC2C6] w-[40px] h-[40px] rounded-lg p-2 flex justify-center items-center">
                  <div className={`rounded-full w-3 h-3 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity Section */}
        <div className="mt-4 w-[50%]">
          <h1 className="mt-2">Quantity</h1>
          <button onClick={decrement} className="border p-1 w-[20%] rounded-md mt-2 ">-</button>
          <p className="inline-block mx-2">{count}</p>
          <button onClick={increment} className="border p-1 w-[20%] rounded-md">+</button>
        </div>
        <h1 className="mt-4">In Stock</h1>
        <h1>Free delivery available</h1>
        <h1>Sales 10% Off Use Code: CODE123</h1>

        <div className="mt-3">
          <h1>Description:</h1>
          <h1 className="mt-3">
            Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. Small metal text applique. Read more
          </h1>
        </div>

        <div className="mt-3">
          <h1>Available offers:</h1>
          <h1 className="mt-3">
            Bank Offer: 10% instant discount on Bank Debit Cards, up to $30 on orders of $50 and above.
          </h1>
        </div>

      </div>
    </div>
  );
};

export default ProductDatials;
