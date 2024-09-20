import React, { useContext } from "react";
import ProductItemContext from "../../../contextAPI/ProductItemContext";

const CreateList = () => {
  const { formEntries,deleteInvoice } = useContext(ProductItemContext);

  const handleDelete = (id) => {
    deleteInvoice(id);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full p-6 text-gray-900 bg-gray-100">
        <h1 className="text-2xl font-bold">All Invoice List</h1>
      </div>
      <div className="bg-white">
        <div className="flex justify-between font-bold text-gray-800 p-4 border-b">
          <p className="w-1/6">Invoice ID</p>
          <p className="w-1/6">Billing Name</p>
          <p className="w-1/6">Order Date</p>
          <p className="w-1/6">Total</p>
          <p className="w-1/6">Payment Method</p>
          <p className="w-1/6">Status</p>
          <p className="w-1/6">Action</p>
        </div>
        {formEntries.map((entry) => (
          <div
            key={entry.id}
            className="flex justify-between p-4 border-b last:border-none transition-transform duration-300 ease-in-out transform hover:scale-15 hover:shadow-lg hover:bg-gray-50"
          >
            <p className="w-1/6">{entry.id}</p>
            <p className="w-1/6">{entry.senderName}</p>
            <p className="w-1/6">{entry.invoiceDate}</p>
            <p className="w-1/6">{entry.total}</p>
            <p className="w-1/6">{entry.paymentMethod}</p>
            <p className="w-1/6">{entry.invoiceStatus}</p>
            <p className="w-1/6">
            <button className="text-blue-500 hover:underline">

              <i class="ri-eye-line"></i>
              </button>
              <button className="text-blue-500 hover:underline ml-3">
              <i class="ri-pencil-fill"></i>

              </button>
              <button className="text-blue-500 hover:underline ml-3">
              <i onClick={()=>{handleDelete(entry.id)}} class="ri-delete-bin-6-line"></i>
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateList;
