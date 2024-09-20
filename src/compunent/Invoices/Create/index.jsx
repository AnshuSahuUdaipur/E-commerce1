import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItemContext from "../../../contextAPI/ProductItemContext";
const Create = () => {
  // Step 1: State initialization
  const { formData, setFormData ,handleChange,handleSubmit } = useContext(ProductItemContext);

  const navigate = useNavigate();
  // Step 2: Handle change in input fields

  console.log(formData);

  // Step 3: Handle form submit
  const onsummit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleSubmit()
 
    navigate("/invoice/list"); // Log the current form data to console
  };

  return (
    <div className="w-full h-full rounded-lg mt-6 bg-slate-50 shadow-lg">
      <div className="p-4">
        <img
          className="w-[20%] object-contain h-auto"
          src="https://techzaa.getappui.com/larkon/admin/assets/images/logo-dark.png"
          alt="Logo"
        />
      </div>
      <div className="p-4">
        <form action="" onSubmit={onsummit}>
        <div className="flex flex-col mb-4">
            <span className="p-2">Invioce id</span>
            <input
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2">Sender Name</span>
            <input
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2">Sender Full Address</span>
            <textarea
              placeholder="Enter Address"
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              name="senderAddress"
              value={formData.senderAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2">Total</span>
            <input
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="number"
              name="phoneNumber"
              value={formData.total}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2"> paymentmeathod</span>
            <input
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="text"
              name="invoiceNumber"
              value={formData.paymentmeathod}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2">Invoice Date</span>
            <input
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="date"
              name="invoiceDate"
              value={formData.invoiceDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="p-2">Invoice Status</span>
            <select
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              name="invoiceStatus"
              value={formData.invoiceStatus}
              onChange={handleChange}
            >
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <hr />
          <h1 className="p-4 text-[50px]">Issue Fory</h1>

          <div className="flex flex-col gap-2 mb-3">
            <input
              placeholder="First Name"
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <textarea
              placeholder="Enter Address"
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <input
              placeholder="Phone Number"
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <input
              placeholder="Additional Info"
              className="h-[7vh] rounded-lg border-2 border-[#D8DFE7] outline-none"
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>

          <div className="p-4">
            <div className="w-full h-12 p-3 flex items-center rounded-lg bg-zinc-100 justify-between">
              <p className="flex-1 text-center">Product Name</p>
              <p className="flex-1 text-center">Quality</p>
              <p className="flex-1 text-center">Price</p>
              <p className="flex-1 text-center">Tax</p>
              <p className="flex-1 text-center">Total</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 p-1 mt-2">
              <div className="flex flex-col md:mr-8 mb-4">
                <span className="text-[25px]">$</span>
                <input
                  placeholder="Input N"
                  className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] border-2 border-gray-300 rounded"
                  type="text"
                  name="productName"
                />
                <input
                  placeholder="Input N"
                  className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] border-2 border-gray-300 rounded mt-2"
                  type="text"
                  name="productQuality"
                />
              </div>
              <div className="flex flex-col md:mr-8 mb-4">
                <span className="text-[25px]">$</span>
                <input
                  className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] border-2 border-gray-300 rounded"
                  type="number"
                  name="productPrice"
                />
              </div>
              <div className="flex flex-col md:mr-8 mb-4">
                <span className="text-[25px]">$</span>
                <input
                  className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] border-2 border-gray-300 rounded"
                  type="number"
                  name="productTax"
                />
              </div>
              <div className="flex flex-col md:mr-8 mb-4">
                <span className="text-[25px]">$</span>
                <input
                  className="w-[60px] h-[30px] md:w-[80px] md:h-[40px] border-2 border-gray-300 rounded"
                  type="number"
                  name="productTotal"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-3 p-4">
            <button
              className="w-full md:w-[20%] h-[50px] rounded-lg bg-green-400 text-white"
              type="submit"
            >
              Submit
            </button>
            <button
              className="w-full md:w-[20%] h-[50px] rounded-lg bg-red-400 text-white"
              type="button"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
