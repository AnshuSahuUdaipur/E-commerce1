import React,{ useState }  from "react";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const navigate = useNavigate();
  

  const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  const backToGrid = () => {
    navigate("/product-Grid");
  };

  const handleCheckoutClick = () => {
    setCheckoutVisible(true);
  };

  const handleClose = () => {
    setCheckoutVisible(false);
  };
  // const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  // const handleCheckoutClick = () => {
  //   setCheckoutVisible(true);
  // };

  return (
    <div className="flex">
      {/* Form on the Left Side */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/3 max-w-4xl mx-auto mt-10 flex flex-col">
        <form className="flex-1">
          {/* Step 1: Personal Details */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>

          {/* Step 2: Full Address */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Full Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
            >
              Back
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>

          {/* Step 3: Shipping Method */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Shipping Method</h2>
            <div className="space-y-4">
              {[
                "DHL Fast Service",
                "FedEx Services",
                "UPS Services",
                "Our Courier Services",
              ].map((method) => (
                <label key={method} className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={method}
                    className="form-radio"
                  />
                  <span className="ml-2">{method}</span>
                  <img
                    src={`/images/${method
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.jpg`}
                    alt={method}
                    className="w-32 h-32 object-contain ml-4"
                  />
                </label>
              ))}
            </div>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
            >
              Back
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>

          {/* Step 4: Payment Method */}
          <div>
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="mb-4">
              <label className="block mb-1">Payment Method</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option value="">Select Payment Method</option>
                <option value="paypal">PayPal</option>
                <option value="creditCard">Credit Card</option>
              </select>
            </div>

            <div id="paypal-section" className="mb-4">
              <label className="block mb-1">PayPal Email</label>
              <input
                type="email"
                placeholder="Enter PayPal Email"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div id="credit-card-section" className="mb-4">
              <div className="mb-4">
                <label className="block mb-1">Credit Card Number</label>
                <input
                  type="text"
                  placeholder="Enter Credit Card Number"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>


          </div>
        </form>
      </div>

      {/* Fixed Right Side Blocks */}
      <div className="w-1/3 p-8 space-y-8 bg-gray-100 flex flex-col">
        <div className="bg-red-500 flex-1 rounded-lg text-white flex items-center justify-center">
          <span>Block 1</span>
        </div>
        <div className="bg-green-500 flex-1 rounded-lg text-white flex items-center justify-center">
          <span>Block 2</span>
        </div>
          <div className="flex">
          <button
              type="button"
              onClick={backToGrid}
              className="bg-red-500 text-white px-4 py-2 rounded mr-4"
            >
              Back To  Cart
            </button>
            <button
              type="submit"
              onClick={handleCheckoutClick}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Checkout Order
            </button>
          </div>
        <div className="bg-blue-500 flex-1 rounded-lg text-white flex items-center justify-center">
          <span>Block 3</span>
        </div>
        

      {/* Sliding Checkout Div */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
          isCheckoutVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white items-center  mt-12 h-[90%] w-[30%] rounded-lg p-6 shadow-lg transition-transform duration-300 ease-in-out ${
            isCheckoutVisible ? "transform translate-y-0" : "transform translate-y-[-100%]"
          }`}
        > 
<div className="flex justify-center">
  <img
    className="items-center"
    src="https://techzaa.getappui.com/larkon/admin/assets/images/party.png"
    alt=""
  />
</div>

          <h2 className="text-lg font-bold text-center">Thank You !</h2>
          <p className="text-lg text-[16px] text-center">Your Tranction was succesful</p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
      </div>
    </div>
  ); 
};

export default CheckOut;
