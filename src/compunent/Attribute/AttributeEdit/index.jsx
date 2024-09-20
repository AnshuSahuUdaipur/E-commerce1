import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductItemContext from "../../../contextAPI/ProductItemContext";

const AttributeEdit = () => {
  const { attribudata, setattributedata, attributeHandleSummit } = useContext(ProductItemContext);
  const navigate = useNavigate();

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setattributedata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    attributeHandleSummit(); // Save updated data
    navigate("/attribute-list"); // Navigate back to the list
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Attribute</h1>
      <form onSubmit={onSubmitEdit} className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2">
            <label htmlFor="attributeVariant" className="block text-sm font-medium text-gray-700">Attribute Variant</label>
            <input
              type="text"
              id="attributeVariant"
              name="attributeVariant"
              value={attribudata.attributeVariant}
              onChange={handleChangeEdit}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="attributeValue" className="block text-sm font-medium text-gray-700">Attribute Value</label>
            <input
              type="text"
              id="attributeValue"
              name="attributeValue"
              value={attribudata.attributeValue}
              onChange={handleChangeEdit}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="attributeId" className="block text-sm font-medium text-gray-700">Attribute ID</label>
          <input
            type="text"
            id="attributeId"
            name="attributeId"
            value={attribudata.attributeId}
            onChange={handleChangeEdit}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="option" className="block text-sm font-medium text-gray-700">Option</label>
          <select
            id="option"
            name="option"
            value={attribudata.option}
            onChange={handleChangeEdit}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="bg-color">Background Color</option>
            <option value="phone-device">Phone Device</option>
          </select>
        </div>
        <div>
          <label htmlFor="CreateOn" className="block text-sm font-medium text-gray-700">Create On</label>
          <input
            type="text"
            id="CreateOn"
            name="CreateOn"
            value={attribudata.CreateOn}
            onChange={handleChangeEdit}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttributeEdit;
