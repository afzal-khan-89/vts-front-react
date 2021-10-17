import React, { useState } from "react";
import "./home.css";
import changeButton from "../../img/pre-apps-imag/edit.png";
import addUser from "../../img/pre-apps-imag/add_user.png";

let tArray = [];
for (var i = 0; i < 5; i++) {
  tArray.push("" + i);
}

const Profile = () => {
  return (
    <div className="mx-10 mt-2 bg-gray-50 border-l border-r border-t border-gray-300 overflow-y-auto">

        
      <div className="mx-10 flex flex-col pt-3  text-gray-600 text-sm">
        <div className="h-32 flex flex-col pt-3 pb-5 text-gray-600 text-sm">
            <div className="w-24 h-24 bg-no-repeat bg-center "  style={{ background: `url(${addUser})` }}>

            </div>

        </div>
        <div className="flex flex-col pt-3 pb-5 text-gray-600 text-sm">
          <div className="pl-5 py-0.5 bg-gray-300">
            <span>Name : Milk Vita</span>
          </div>
          <div className="pl-5 border-b border-t border-gray-300 p-1 text-sm text-gray-600 bg-gray-100">
            <span>User Name : milkvita</span>
          </div>
          <div className="pl-5 border-b border-gray-300 py-1 text-sm text-gray-600">
            <span>Email : ddp.transport@yahoo.com</span>
          </div>
          <div className="pl-5 border-b border-gray-300 py-1 text-sm text-gray-600 bg-gray-100">
            <span>Address Line 1 : Mirpur-7, Dhaka-1216</span>
          </div>
          <div className="pl-5 py-0.5 bg-gray-300">
            <span>Mobile : 01711048369</span>
          </div>
          <div className="pl-5 py-0.5 bg-gray-300">
            <span>Phone : +8802-9038302</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
