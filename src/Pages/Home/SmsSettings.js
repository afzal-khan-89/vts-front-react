import React, { useState } from "react";
import "./home.css";
import changeButton from "../../img/pre-apps-imag/edit.png";

const SmsSettings = () => {
  let tArray = [];
  for (var i = 0; i < 100; i++) {
    tArray.push("" + i);
  }

  console.log("TEST ARRAY LENGTH " + tArray.length);
  return (
    <div className="mx-10 mt-2 bg-gray-50 border-l border-r border-t border-gray-300 overflow-y-auto">
      <div className="mx-10 flex flex-col pt-3 pb-5 text-gray-600 text-sm">
        <div className="pl-5 py-0.5 bg-gray-300">
          <span>Sms Info</span>
        </div>
        <div className="pl-5 border-b border-t border-gray-300 p-1 text-sm text-gray-600 bg-gray-100">
          <span>SMS Period : Oct, 2021</span>
        </div>
        <div className="pl-5 border-b border-gray-300 py-1 text-sm text-gray-600">
          <span>Total SMS :</span>
        </div>
        <div className="pl-5 border-b border-gray-300 py-1 text-sm text-gray-600 bg-gray-100">
          <span>Used SMS :</span>
        </div>
        <div className="pl-5 py-0.5 bg-gray-300">
          <span>Remaining Total : 0 </span>
        </div>
      </div>
      <div className="mx-10 border ">
        <table class="w-full border">
          <thead>
            <tr class="bg-gray-50 border-b">
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">
                  #Number Plate
                </div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">
                  SMS Recipient
                </div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Speed Limit</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">
                  Over Speed SMS
                </div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                Geo-fence SMS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-150 border-b  text-center">
              <td class="p-1 border-r cursor-pointer text-sm text-gray-600">
                <input type="text" class="border p-1" />
              </td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer "></td>
            </tr>
            {tArray.map((item) => (
              <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className=" border-r">
                  123456663378901234
                </td>
                <td class=" border-r">
                  <div className="flex justify-center gap-4">
                    <span>01745698745</span>+
                    <button
                      className="p-0 w-5 h-5 bg-contain"
                      style={{ background: `url(${changeButton})` }}
                    ></button>
                  </div>
                </td>
                <td class=" border-r">active</td>
                <td class=" border-r">
                  <div className="flex justify-center gap-4">
                    <span>60</span>
                    <button
                      className="p-0 w-5 h-5 bg-contain"
                      style={{ background: `url(${changeButton})` }}
                    ></button>
                  </div>
                </td>
                <td class=" border-r">
                  <div className="flex justify-center gap-4">
                    <span>Abdul Malek </span>
                    <button
                      className="p-0 w-5 h-5 bg-contain"
                      style={{ background: `url(${changeButton})` }}
                    ></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SmsSettings;
