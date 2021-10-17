import React, { useState } from "react";
import "./home.css";
import changeButton from "../../img/pre-apps-imag/edit.png";

export default function VehicleInfo() {
  let tArray = [];
  for (var i = 0; i < 100; i++) {
    tArray.push("" + i);
  }

  console.log("TEST ARRAY LENGTH " + tArray.length);
  return (
    <div className="mx-10 mt-2 bg-gray-100 border-l border-r border-t border-gray-300 overflow-y-auto">
      <div className="h-16 mt-2 mx-10">
        <span>Toal {tArray.length} vehicles</span>
      </div>
      <div className="mx-10 border ">
        <table class="w-full border">
          <thead>
            <tr class="bg-gray-50 border-b">
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">sl</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Number Plate</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Vehicle Code</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Status</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                Speed Limit
              </th>
              <th class="border-r cursor-pointer text-sm text-sm text-gray-600">
                Driver
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-150 border-b  text-center">
              <td class="p-2 border-r cursor-pointer "></td>
              <td class="p-0 border-r cursor-pointer text-sm text-gray-600">
                <input type="text" class="border p-1" />
              </td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer "></td>
              <td class="p-1 border-r cursor-pointer text-sm text-gray-600">
                <input type="text" class="border p-1" />
              </td>
            </tr>
            {tArray.map((item) => (
              <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td class="p-2 border-r">{item}</td>
                <td className=" border-r">1234566666666666333333333378901234</td>
                <td class=" border-r">
                  <div className="flex justify-center gap-4">
                    <span>007</span>
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
}
