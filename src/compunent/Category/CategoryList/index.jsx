import React from 'react'
import AllProductList from '../../AllProductList'

const CategoryList = () => {
  return (
    <div className='w-full gap-5'>
      <div className='w-full bg-white flex flex-wrap justify-around items-center p-5 gap-5'>
        <div className='bg-blue-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4'>
          <img
            className='w-full h-32 object-cover'
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt="Fashion Category"
          />
          <h1 className='text-center mt-2 text-lg font-semibold text-gray-800'>Fashion Category</h1>
        </div>
        <div className='bg-green-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4'>
          <img
            className='w-full h-32 object-cover'
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt="Electronics Headphone"
          />
          <h1 className='text-center mt-2 text-lg font-semibold text-gray-800'>Electronics Headphone</h1>
        </div>
        <div className='bg-yellow-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4'>
          <img
            className='w-full h-32 object-cover'
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt="Foot Wares"
          />
          <h1 className='text-center mt-2 text-lg font-semibold text-gray-800'>Foot Wares</h1>
        </div>
        <div className='bg-purple-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4'>
          <img
            className='w-full h-32 object-cover'
            src="https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"
            alt="Eye Ware & Sunglass"
          />
          <h1 className='text-center mt-2 text-lg font-semibold text-gray-800'>Eye Ware & Sunglass</h1>
        </div>
      </div>
      <AllProductList/>
    </div>
  )
}

export default CategoryList
