/* eslint-disable react/prop-types */
// import React from "react";

// const CarDetailsInfo = () => {
//   return (
//     <div className="w-full absolute left-0 bottom-0 right-0">
//       <div className="px-4 sm:px-8 max-w-5xl m-auto">
//         <h1 className="text-center font-semibold text-sm">List Group</h1>
//         <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
//           <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
//             First Item
//           </li>
//           <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
//             Second Item
//           </li>
//           <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
//             Third Item
//           </li>
//           <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
//             Another Item
//           </li>
//           <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
//             Item for the Nth time
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsInfo;

import React from "react";

const CarDetailsInfo = ({ selectedMarker }) => {
  console.log(selectedMarker);
  return (
    <div className="w-full absolute left-0 bottom-0 right-0">
      <div className="px-4 sm:px-8 max-w-5xl m-auto">
        <div className="bg-white">
          <div className="flex">
            {/* Left column */}
            <div className="flex-1">
              <div className="border border-gray-200 rounded overflow-hidden">
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  AC: {selectedMarker.ac}
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  Engin: {selectedMarker.engine}
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Fuel: {selectedMarker.fuel}</p>
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Speed: {selectedMarker.speed}</p>
                </li>
              </div>
            </div>
            {/* Right column */}
            <div className="flex-1">
              <div className="border border-gray-200 rounded overflow-hidden">
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Time: {selectedMarker.time}</p>
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Latitude: {selectedMarker.latitude}</p>
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Longitude: {selectedMarker.longitude}</p>
                </li>
                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                  <p>Satalite: {selectedMarker.satellite}</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsInfo;
