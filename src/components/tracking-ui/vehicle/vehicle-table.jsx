import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { all_cars } from "../../../db";

const VehicleTable = () => {
  const [searchCar, setSearchCar] = useState("");
  const [selectedCar, setSelectedCar] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // When car list api call

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://176.58.99.231/api/v1/location/history"
  //       );
  //       setAllCars(response.data.data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSearch = (e) => {
    setSearchCar(e.target.value);
  };

  // Filter car
  const filterCar = all_cars.filter((car) => {
    return car.car_name.toLowerCase().includes(searchCar.toLowerCase());
  });

  // Handler for selecting and deselecting all cars;
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCar([]);
    } else {
      setSelectedCar(all_cars.map((car) => car.car_name));
    }
    setSelectAll(!selectAll);
  };

  // Handler for selecting and deselecting a single car
  const handleSelectCar = (event) => {
    const carName = event.target.value;
    if (selectedCar.includes(carName)) {
      setSelectedCar(selectedCar.filter((name) => name !== carName));
    } else {
      setSelectedCar([...selectedCar, carName]);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative shadow-md sm:rounded-lg">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiSearch color="gray" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for items"
              value={searchCar}
              onChange={handleSearch}
            />
          </div>
        </div>

        <table className="text-left w-full">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 w-full">
            <tr className="flex justify-between items-center w-full">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Car name
              </th>
              <th scope="col" className="px-6 py-3">
                Km/h
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white flex flex-col items-center justify-start overflow-y-scroll w-full h-[200px]">
            {filterCar.map((car, index) => (
              <tr
                key={index}
                className="flex justify-between items-center h-[40px] w-full text-black border-b bg-white hover:bg-gray-50"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      value={car?.car_name}
                      checked={selectedCar.includes(car?.car_name)}
                      onChange={handleSelectCar}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="!text-left whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {car?.car_name}
                </th>
                <td className="px-6 py-4">{car?.speed}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    <FaCarSide />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleTable;
