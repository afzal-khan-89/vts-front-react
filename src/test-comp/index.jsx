// /* eslint-disable react/prop-types */

// function TestComp() {
//   return (
//     <div className="w-full py-14 md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
//       <div className="mt-16">
//         <h2>This is Test Component</h2>
//         <table className="text-left w-full">
//           <thead className="bg-black flex text-white w-full">
//             <tr className="flex w-full mb-4">
//               <th className="p-4 w-1/4">One</th>
//               <th className="p-4 w-1/4">Two</th>
//               <th className="p-4 w-1/4">Three</th>
//               <th className="p-4 w-1/4">Four</th>
//             </tr>
//           </thead>
//           <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-[200px]">
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//             <tr className="flex w-full mb-4">
//               <td className="p-4 w-1/4">Dogs</td>
//               <td className="p-4 w-1/4">Cats</td>
//               <td className="p-4 w-1/4">Birds</td>
//               <td className="p-4 w-1/4">Fish</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TestComp;

import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestComp = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value === "custom_date") {
      setShowDatePicker(true);
      const currentDate = new Date();
      setStartTime(currentDate);
      setEndTime(currentDate);
    } else {
      setShowDatePicker(false);
      setStartTime(null);
      setEndTime(null);
    }
  };

  const handleStartDateChange = (date) => {
    const formattedStartDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    console.log("formattedStartDate", formattedStartDate);
    setStartTime(formattedStartDate);
  };

  const handleEndDateChange = (date) => {
    const formattedEndDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    setEndTime(formattedEndDate);
  };

  return (
    <div className="w-full py-14 md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
      <div className="mt-16">
        <div>
          <select onChange={handleSelectChange}>
            <option value="Select Date">Current Hour</option>
            <option value="1_hour">Last Hour</option>
            <option value="6_hour">Last Six Hours</option>
            <option value="today">Today</option>
            <option value="custom_date">Custom Date</option>
          </select>
          {showDatePicker && (
            <div>
              <DatePicker
                dateFormat="MMMM d, yyyy h:mm aa"
                selected={startTime}
                onChange={handleStartDateChange}
                placeholderText="Start Date"
              />
              <br />
              <DatePicker
                dateFormat="MMMM d, yyyy h:mm aa"
                selected={endTime}
                onChange={handleEndDateChange}
                placeholderText="End Date"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestComp;
