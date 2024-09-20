import React from 'react'
import { useContext } from 'react'
import ProductItemContext from '../../../contextAPI/ProductItemContext';
// import CheckOut from '../../Order/CheckOut';
const AttributeList = () => {
  const { ettributeEntries,handleedit,handleDelete } = useContext(ProductItemContext);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-full p-6 text-gray-900 bg-gray-100">
      <h1 className="text-2xl font-bold">All Attribute List</h1>
    </div>
    <div className="bg-white">
      <div className="flex justify-between font-bold text-gray-800 p-4 border-b">
        <p className="w-1/6"> ID</p>
        <p className="w-1/6">Variant</p>
        <p className="w-1/6">Value</p>
        <p className="w-1/6">Option</p>
        <p className="w-1/6">Created On</p>
        <p className="w-1/6">Status</p>
      </div>
      {ettributeEntries.map((entry,index) => (
        <div
          // key1={entry.id}
          // key={index}

          className="flex justify-between p-4 border-b last:border-none transition-transform duration-300 ease-in-out transform hover:scale-15 hover:shadow-lg hover:bg-gray-50"
        >
           <p className="w-1/6">{entry.attributeId}</p>
          <p className="w-1/6">{entry.attributeVariant}</p>
          <p className="w-1/6">{entry.attributeValue}</p>
         
          <p className="w-1/6">{entry.option}</p>
          <p className="w-1/6">{entry.CreateOn}</p>

          <p className="w-1/6">
             <button className="text-blue-500 hover:underline ml-2"><i class="ri-eye-line"></i></button>

             <button className="text-blue-500 hover:underline ml-3" onClick={()=>handleedit(entry.attributeId)}><i class="ri-pencil-fill"></i></button>
            <button className="text-blue-500 hover:underline ml-3" onClick={()=>handleDelete(entry.attributeId)}><i class="ri-delete-bin-6-line"></i></button>

          </p>
        </div>
      ))}
    </div>
    <div>
      {/* <CheckOut/> */}
    </div>
  </div>
  )
}

export default AttributeList;