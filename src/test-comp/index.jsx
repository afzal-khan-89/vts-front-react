/* eslint-disable react/prop-types */

function TestComp() {
  return (
    <div className="w-full py-14 md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
      <div className="mt-16">
        <h2>This is Test Component</h2>
        <table className="text-left w-full">
          <thead className="bg-black flex text-white w-full">
            <tr className="flex w-full mb-4">
              <th className="p-4 w-1/4">One</th>
              <th className="p-4 w-1/4">Two</th>
              <th className="p-4 w-1/4">Three</th>
              <th className="p-4 w-1/4">Four</th>
            </tr>
          </thead>
          <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-[200px]">
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
            <tr className="flex w-full mb-4">
              <td className="p-4 w-1/4">Dogs</td>
              <td className="p-4 w-1/4">Cats</td>
              <td className="p-4 w-1/4">Birds</td>
              <td className="p-4 w-1/4">Fish</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestComp;
