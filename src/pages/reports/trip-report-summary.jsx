/* eslint-disable react/prop-types */

import { formatEpochToDateForTripReport } from "../../utils/select-time-utility";

const TripReportSummary = ({
  reports,
  selectReport,
  selectedVehicle,
  startTime,
  endTime,
  todayFormattedDate,
}) => {
  console.log("Trip Reports--->", reports);

  return (
    <>
      <div className='flex justify-between flex-wrap'>
        <div>
          <h2 className='text-3xl mb-4'>
            TrustBD Technologies Ltd. Trip Report Summary
          </h2>
          <div className='flow-root'>
            <dl className='-my-3 divide-y divide-gray-100 text-sm'>
              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Report Title</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  : {selectReport}
                </dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Vehicle</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  : {selectedVehicle}
                </dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Owner</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  : Milk Vita (milkvita){" "}
                </dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Report Time</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  : {startTime} To {endTime}
                </dd>
              </div>

              <div className='grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                <dt className='font-medium text-gray-900'>Report Date</dt>
                <dd className='text-gray-700 sm:col-span-2'>
                  : {todayFormattedDate}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {reports.length > 0 ? (
        <div className='overflow-x-auto rounded-lg border border-gray-200'>
          <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
            <thead className='ltr:text-left rtl:text-right'>
              <tr>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Start Location
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  End Location
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Start Time
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  End Time
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Duration
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Traveled Distance
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Avg. Speed
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Max Speed
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200'>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td className='whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900'>
                    ({report?.latitude}, {report.longitude})
                  </td>
                  <td className='whitespace-nowrap px-4 text-center py-2 text-gray-700'>
                    ({report?.latitude}, {report.longitude})
                  </td>

                  <td className='whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900'>
                    {formatEpochToDateForTripReport(report.time)}
                  </td>
                  <td className='whitespace-nowrap px-4 text-center py-2 text-gray-700'>
                    {formatEpochToDateForTripReport(report.time)}
                  </td>

                  <td className='whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900'>
                    0:35:39 (Dummy)
                  </td>
                  <td className='whitespace-nowrap px-4 text-center py-2 text-gray-700'>
                    15.69 km (Dummy)
                  </td>
                  <td className='whitespace-nowrap px-4 text-center py-2 text-gray-700'>
                    {report?.speed}
                  </td>
                  <td className='whitespace-nowrap px-4 text-center py-2 text-gray-700'>
                    {report?.speed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='w-full border flex justify-center items-center mt-8'>
          <h2 className='text-red-600 text-2xl p-4'>No records found!</h2>
        </div>
      )}
    </>
  );
};

export default TripReportSummary;