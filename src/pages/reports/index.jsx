import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SelectTime } from "../../constants/InfoData";
import { calculateDistance } from "../../utils/calculate-distance";
import { formatDateTime, getTimeRange } from "../../utils/select-time-utility";

const Reports = () => {
  const [userVehicle, setUserVehicle] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [reports, setReports] = useState([]);
  const [distances, setDistances] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  console.log("Distances ----> ", distances);

  // Get individual user all vehicles
  const fetchUserVehicles = useCallback(() => {
    const requestBody = {
      id: "5", // Logged in user ID
    };

    axios
      .post("http://176.58.99.231/api/v1/vehicle/users/all", requestBody)
      .then((response) => {
        setUserVehicle(response.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchUserVehicles();
  }, [fetchUserVehicles]);

  useEffect(() => {
    const calculateAllDistances = () => {
      const distancesArray = [];
      for (let i = 1; i < reports.length; i++) {
        const distance = calculateDistance(reports[i - 1], reports[i]);
        distancesArray.push(distance);
      }

      setDistances(distancesArray);
    };
    calculateAllDistances();
  }, [reports]);

  useEffect(() => {
    const now = new Date();
    const formattedNow = formatDateTime(now);
    setCurrentTime(formattedNow);
  }, []);

  const handleSelectTimes = (e) => {
    const value = e.target.value;
    setSelectedTime(value);

    const { startTime, endTime } = getTimeRange(value);
    setStartTime(startTime);
    setEndTime(endTime);
  };

  const handleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const fetchVehicleReports = useCallback(() => {
    const requestBody = {
      vehicle: "dk-metro-ka-0007",
      start_time: "1123123213",
      end_time: "21323213",
      // start_time: convertNormalTimeToUnixTime(startTime).toString(),
      // end_time: convertNormalTimeToUnixTime(endTime).toString(),
    };
    console.log("requestBody---->", requestBody);
    axios
      .post("http://176.58.99.231/api/v1/report/raw-data", requestBody)
      .then((response) => {
        setReports(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-[#E9F8F3B2]">
      <div className="w-full py-14 md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="mt-16">
          <h2>This is Report Pages</h2>
          <div className="max-w-full mx-auto bg-white p-16">
            <form>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="HeadlineAct"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Vehicles
                  </label>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    value={selectedVehicle}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Please select</option>
                    {userVehicle.length > 0 &&
                      userVehicle.map((item, i) => (
                        <option key={i} value={item?.number_plate}>
                          {item?.number_plate}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="HeadlineAct"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Report Format:
                  </label>

                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Please select</option>
                    <option value="group-1">Group 1</option>
                    <option value="group-2">Group 2</option>
                    <option value="group-3">Group 3</option>
                    <option value="group-4">Group 4</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="HeadlineAct"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Report Types:
                  </label>

                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">Please select</option>
                    <option value="group-1">Group 1</option>
                    <option value="group-2">Group 2</option>
                    <option value="group-3">Group 3</option>
                    <option value="group-4">Group 4</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="HeadlineAct"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Select Time
                  </label>

                  <select
                    value={selectedTime}
                    onChange={handleSelectTimes}
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                  >
                    {SelectTime.map((item, i) => (
                      <option key={i} value={item.value}>
                        {item.key}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>Start Time:</label>
                  <input
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                    type="text"
                    value={startTime}
                    placeholder={currentTime}
                    readOnly
                  />
                </div>

                <div>
                  <label>End Time:</label>
                  <input
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                    type="text"
                    value={endTime}
                    placeholder={currentTime}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex justify-end items-end">
                <button
                  type="submit"
                  onClick={fetchVehicleReports}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Generate Reports
                </button>
              </div>
            </form>
          </div>

          <h1>Distances Between Points</h1>
          <ul>
            {distances.map((distance, index) => (
              <li key={index}>
                Distance {index + 1}: {distance.toFixed(2)} meters
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
