import React from "react";
import rect from '../../assets/Rectangle.png'
import profile from '../../assets/Profile.png'
import { useNavigate } from "react-router-dom";

const InvoiceDashboard = () => {
  const navigate=useNavigate()
  return (
    <div className=" min-h-screen flex justify-center p-4 w-[400px] items-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
       <div className="relative flex flex-col items-center w-full">
         {/* Header */}
         <div className=" text-white text-center p-6 h-[190px] relative z-0 w-full"
        style={{ backgroundImage: `url(${rect})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
          <h2 className="text-xl font-semibold">Invoice</h2>
          <img
            src={profile}
            alt="Profile"
            className="absolute top-4 right-4 w-10 h-10 rounded-full"
          />
        </div>

        {/* Amount Section */}
        <div className="flex justify-around  p-4 rounded-lg mt-[-20%] h-[120px] z-10 relative bg-white w-[90%] ">
          <div className="bg-blue-200 text-center p-4 rounded-lg w-1/2  mr-2 flex flex-col items-center">
            <p className="text-sm">Amount Raised</p>
            <p className="text-xl font-bold">₹10,000</p>
          </div>
          <div className="text-center p-4 rounded-lg w-1/2 ml-2 flex flex-col items-center">
            <p className="text-sm">Amount Paid</p>
            <p className="text-xl font-bold">₹5,000</p>
          </div>
        </div>
       </div>

        {/* Recent Transactions */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-center py-2">
            <h3 className="text-lg font-semibold">Recent</h3>
            <a href="#" className="text-blue-600 text-sm">View all</a>
          </div>

          {[1, 2, 3].map((item, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg mb-3 shadow flex justify-between items-center">
             <div>
             <p className="text-sm font-medium">No. #10</p>
              <p className="text-xs text-gray-500">Mar 02, 2023</p>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mt-2 inline-block">Saved</span>
             </div>

              <div className=" ">
                <p className="text-sm font-medium text-gray-500">lorem ipsum</p>
                <p className="text-sm font-semibold">₹100.0</p>
                <p className="text-xs text-gray-500">Due in 4 days</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="p-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold" onClick={()=>navigate('/create')}>
            + Create new invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
