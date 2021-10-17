import React, { useState } from "react";
import "./home.css";
import changeButton from "../../img/pre-apps-imag/edit.png";
import deleteButton from "../../img/pre-apps-imag/delete.png";

const Manager = () => {
  let tArray = [];
  for (var i = 0; i < 5; i++) {
    tArray.push("" + i);
  }

  const createManager = () => {};
  return (
    <div className="mx-10 mt-2 bg-gray-50 border-l border-r border-t border-gray-300 overflow-y-auto">
      <div className="mx-10 flex flex-col pt-3  text-gray-600 text-sm">
        <div className="flex flex-row justify-end  text-gray-600 text-sm">
          <button
            class="bg-warmGray-200 rounded-md text-sm text-yellow-600 hover:bg-warmGray-300 hover:red-500 px-4 py-2 outline-none focus:shadow-outline"
            onClick={() => {
              createManager();
            }}
          >
            Create Manager
          </button>
        </div>
        <div className="flex justify-Start bg-yellow-400 text-green-600 text-sm py-1 px-5">
          Drivers
        </div>
      </div>
      <div className="mx-10 border ">
        <table class="w-full border">
          <thead>
            <tr class="bg-gray-50 border-b">
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center"># sl</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Name</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                <div class="flex items-center justify-center">Address</div>
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                Contact
              </th>
              <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                Assigned Vehicle
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
              <td class="p-1 border-r cursor-pointer text-sm text-gray-600">
                <input type="text" class="border p-1" />
              </td>
            </tr>
            {tArray.map((item) => (
              <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-1 border-r">{item}</td>
                <td class="p-1  border-r">
                  <span>Md.Ataur Rahman</span>
                </td>
                <td class="p-1  border-r">Madaripur</td>
                <td class="p-1  border-r">2569871</td>
                <td class="p-1  border-r">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-2">
                      <div>dk-metro-cha-003</div>
                      <button
                        className="p-0 w-3 h-3"
                        style={{ background: `url(${deleteButton})` }}
                      ></button>
                    </div>
                    <div className="flex gap-2">
                      <div>dk-metro-cha-003</div>
                      <button
                        className="p-0 w-3 h-3"
                        style={{ background: `url(${deleteButton})` }}
                      ></button>
                    </div>
                    <div className="flex gap-2">
                      <div>dk-metro-cha-003</div>
                      <button
                        className="p-0 w-3 h-3"
                        style={{ background: `url(${deleteButton})` }}
                      ></button>
                    </div>
                    <div className="flex gap-2">
                      <div>dk-metro-cha-003</div>
                      <button
                        className="p-0 w-3 h-3"
                        style={{ background: `url(${deleteButton})` }}
                      ></button>
                    </div>
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
export default Manager;
