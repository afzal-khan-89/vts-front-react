import axios from "axios";
import haversine from "haversine-distance";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useCallback, useEffect, useState } from "react";
import { SelectTime } from "../../constants/InfoData";
import { calculateDistance } from "../../utils/calculate-distance";
import { convertNormalTimeToUnixTime } from "../../utils/date-convertar";
import { formatDateTime, getTimeRange } from "../../utils/select-time-utility";
import { report_types } from "../../utils/static-data";

const Reports = () => {
  const [userVehicle, setUserVehicle] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [reports, setReports] = useState([]);
  const [distances, setDistances] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectReport, setSelectReport] = useState("");

  // Get today's date
  const today = new Date();
  // Format the date as "Jul 02, 2024"
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const todayFormattedDate = today.toLocaleDateString("en-US", options);

  const total = distances.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );

  const isFormValid = selectedVehicle && userVehicle && selectedTime;

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

  const handleSelectReport = (event) => {
    setSelectReport(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      vehicle: selectedVehicle,
      start_time: convertNormalTimeToUnixTime(startTime).toString(),
      end_time: convertNormalTimeToUnixTime(endTime).toString(),
    };

    try {
      const response = await axios.post(
        "http://176.58.99.231/api/v1/report/raw-data",
        requestBody
      );
      const data = response?.data?.data;
      calciulateTotalDistance(data);
      setReports(data);
    } catch (error) {
      console.log("Error:- ", error);
    }
  };

  // Calculate Total Distance
  const calciulateTotalDistance = (data) => {
    let distanceSum = 0;
    for (let i = 1; i < data.length; i++) {
      const prevPoint = data[i - 1];
      const currentPoint = data[i];

      const distance = haversine(
        {
          lat: parseFloat(prevPoint.latitude),
          log: parseFloat(prevPoint.longitude),
        },
        {
          lat: parseFloat(currentPoint.latitude),
          log: parseFloat(currentPoint.longitude),
        }
      );
      distanceSum += distance;
    }
  };

  // Generate Word file functions

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  // const handleDownloadPDF = () => {
  //   const input = document.getElementById("pdf-content");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save("download.pdf");
  //   });
  // };

  return (
    <div className="bg-[#E9F8F3B2]">
      <div className="w-full py-14 md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="mt-16">
          <h2>This is Report Pages</h2>
          <div className="max-w-full mx-auto bg-white p-16 border">
            <form onSubmit={handleSubmit}>
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
                    value={selectReport}
                    onChange={handleSelectReport}
                    className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                  >
                    <option value="">--Select--</option>
                    {report_types.length > 0 &&
                      report_types.map((item, i) => (
                        <option key={i} value={item?.value}>
                          {item?.label}
                        </option>
                      ))}
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
                  // onClick={fetchVehicleReports}
                  disabled={!isFormValid}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Generate Reports
                </button>
              </div>
            </form>
          </div>

          {isFormValid && (
            <div
              className="max-w-full mx-auto bg-white p-16 border mt-2"
              id="pdf-content"
            >
              <div className="flex justify-between flex-wrap">
                <div>
                  <h2 className="text-3xl mb-4">TrustBD Technologies Ltd.</h2>
                  <div className="flow-root">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                      <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">
                          Report Title
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          : {selectReport}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Vehicle</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          : {selectedVehicle}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Owner</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          : Milk Vita (milkvita){" "}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">
                          Report Time
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          : {startTime} To {endTime}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">
                          Report Date
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          : {todayFormattedDate}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                {/* Convert All Button */}
                {/* <div>
                  <button
                    className="mt-6 middle none center w-full rounded-lg bg-blue-700 hover:bg-blue-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                  >
                    Save as PDF
                  </button>

                  <button
                    className="mt-6 middle none center w-full rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                  >
                    Save as Word
                  </button>

                  <button
                    className="mt-6 middle none center w-full rounded-lg bg-blue-700 hover:bg-blue-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                  >
                    Print Report
                  </button>
                </div> */}
              </div>

              {total > 0 && (
                <div className="mt-6">
                  <table
                    className="w-full text-left border border-separate rounded border-slate-200"
                    cellSpacing="0"
                  >
                    <tbody>
                      <tr>
                        <th
                          scope="col"
                          className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                        >
                          Distance Traveled
                        </th>
                        <th
                          scope="col"
                          className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                        >
                          Fuel Consumption
                        </th>
                      </tr>
                      <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                        <td
                          data-th="Date"
                          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          2024-07-01
                        </td>
                        <td
                          data-th="Distance Traveled"
                          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          {total.toFixed(2)}
                        </td>
                        <td
                          data-th="Fuel Consumption"
                          className=" before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          10.63 Liter
                        </td>
                      </tr>
                      <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                        <td
                          data-th="Date"
                          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          Total :
                        </td>
                        <td
                          data-th="Distance Traveled"
                          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          {total.toFixed(2)}
                        </td>
                        <td
                          data-th="Fuel Consumption"
                          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          10.63 Liter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="mt-6 middle none center w-full rounded-lg bg-blue-700 hover:bg-blue-800 py-3 px-6 font-sans text-xs font-bold uppercase text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          onClick={handleDownloadPDF}
        >
          New Save as PDF
        </button>
      </div>
    </div>
  );
};

export default Reports;
