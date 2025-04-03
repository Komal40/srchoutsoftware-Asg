import React from "react";
import profile from '../../assets/Profile.png'
import { useNavigate } from "react-router-dom";

const InvoicePage = () => {
    const navigate=useNavigate()
  return (
    <div className="w-[400px] mx-auto bg-white shadow-lg rounded-lg ">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center p-4 relative rounded-t-lg">
        <button className="absolute left-4 top-4" onClick={()=>navigate('/')}>⬅️</button>
        <h2 className="text-lg font-semibold">Invoice</h2>
        <img
          src={profile}
          alt="Profile"
          className="absolute top-4 right-4 w-8 h-8 rounded-full"
        />
      </div>

<div className="p-4">
      {/* Details Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Details</p>
      <div className="bg-gray-50 p-3 rounded-lg mt-4">
        <p className="text-gray-500">No. #10</p>
        <p className="font-bold text-lg">Mar 02, 2023</p>
        <p className="text-gray-400">Due on Mar 09, 2023</p>
      </div>

      {/* Client Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Clients</p>
      <div className="p-4 bg-gray-50 rounded-lg  mt-4 flex items-center gap-2">
        <span className="text-black ">👤</span>
        <button className="text-black  font-semibold">+ Add client details</button>
      </div>

      {/* Items Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Items</p>
      <div className="p-4 bg-gray-50  rounded-lg mt-4 flex items-center gap-2">
        <span className="text-black ">📋</span>
        <button className="text-black  font-semibold">+ Add items</button>
      </div>

      {/* Total Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Total</p>
      <div className="p-4 bg-gray-50  rounded-lg mt-4">
        <p className="text-gray-500">Subtotal <span className="float-right">₹0.0</span></p>
        <p className="text-gray-500">Tax <span className="float-right">₹0.0</span></p>
        <hr className="border-t-1 border-gray-300 my-2"/>
        <p className="font-bold text-lg mt-2">Total <span className="float-right">₹0.0</span></p>
      </div>

      {/* Note Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Note</p>
      <div className="p-4 bg-gray-50  rounded-lg mt-4 flex items-center gap-2">
        <span className="text-black ">📝</span>
        <button className="text-black  font-semibold">+ Add note</button>
      </div>

      {/* Signature Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Signature</p>
      <div className="p-4 bg-gray-50  rounded-lg mt-4 flex items-center gap-2">
        <span className="text-black ">✍️</span>
        <button className="text-black  font-semibold">+ Add signature</button>
      </div>

      {/* Photo Section */}
      <p className="text-[#8F93A4] font-bold mt-4 text-[18px]">Photo</p>
      <div className="p-4 bg-gray-50  rounded-lg mt-4 flex items-center gap-2">
        <span className="text-black ">📷</span>
        <button className="text-black  font-semibold">+ Add photo</button>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg w-[180px]" >Save</button>
        <button className="border border-blue-600 text-black  py-2 px-6 rounded-lg w-[180px]" >Share</button>
      </div>
      </div>
    </div>
  );
};

export default InvoicePage;
