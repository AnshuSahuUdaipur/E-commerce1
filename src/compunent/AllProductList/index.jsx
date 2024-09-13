import React from 'react';
import ProductList from '../ProductList';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AllProductList = () => {

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
            <button onClick={g} className="text-black bg-orange-400 hover:bg-blue-600  font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Add Product
            </button>
          </Link>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            This Month
          </button>
        </div>
      </div>
      <div className='text-black'>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead className='bg-white text-white whitespace-nowrap'>
          <tr className='text-black'>
            <th className='text-center p-4 w-8 text-black'>
              <input id="checkbox" type="checkbox" className="hidden peer" />
              <label 
                htmlFor="checkbox" 
                className='relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-gray-50 w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden'
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className='w-full fill-white' 
                  viewBox="0 0 520 520"
                >
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check" 
                    data-original="#000000" 
                  />
                </svg>
              </label>
            </th>
            <th className='p-4 text-left text-sm font-medium'>ProductName</th>
            <th className='p-4 text-left text-sm font-medium'>Praice</th>
            <th className='p-4 text-left text-sm font-medium'>Stock</th>
            <th className='p-4 text-left text-sm font-medium'>Category </th>
            <th className='p-4 text-left text-sm font-medium'>Rating</th>
            <th className='p-4 text-left text-sm font-medium'>Actions</th>
          </tr>
        </thead>
        {/* Add <tbody> and rows here */}
        <tbody>
  <tr class="even:bg-blue-50">
    <td class="pl-4 w-8">
      <input id="checkbox1" type="checkbox" class="hidden peer" />
      <label for="checkbox1"
        class="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-gray-50 w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded-md overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 520 520">
          <path
            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
            data-name="7-Check" data-original="#000000" />
        </svg>
      </label>
    </td>
    <td class="p-4 text-sm">
      <div class="flex gap-4 items-center bg-gray-100 rounded-xl p-2">
        <img class="w-16 h-16 object-cover rounded-md" src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png" alt="Black T-shirt" />
        <div class="flex flex-col">
          <p class="font-medium text-gray-800">Black T-shirt</p>
          <div class="flex gap-2 mt-1">
            <p class="text-gray-600">S</p><p class="text-gray-600">M</p><p class="text-gray-600">L</p><p class="text-gray-600">XL</p>
          </div>
        </div>
      </div>
    </td>
    <td class="p-4 text-sm">$80</td>
    <td class="p-4 text-sm">Admin</td>
    <td class="p-4 text-sm">Fession</td>
    <td class="p-4 text-sm">
      <div class="flex items-center">
        <p class="w-[50%] h-[60%] rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center">4.5 *</p>
        <p class="ml-2 text-gray-600">55 Reviews</p>
      </div>
    </td>
    <td class="p-4 flex items-center mt-6">
      <button class="mr-4 flex gap-2 items-center text-blue-500 hover:text-blue-700" title="Edit">
        <i class="ri-eye-line text-lg"></i>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 348.882 348.882">
          <path
            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
            data-original="#000000" />
          <path
            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
            data-original="#000000" />
        </svg>
      </button>
      <button class="mr-4 flex items-center text-red-500 hover:text-red-700" title="Delete">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
            data-original="#000000" />
          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
            data-original="#000000" />
        </svg>
      </button>
    </td>
  </tr>



</tbody>


      </table>
    </div>
      <ProductList />
     

    </div>
  );
};

export default AllProductList;



