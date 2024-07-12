import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Table() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/user/get-user")
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Users
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <Link
                  to="/"
                  className="text-sm font-medium leading-none text-white"
                >
                  Create Account
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Name</th>
                <th className="font-normal text-left pl-12">Email</th>
                <th className="font-normal text-left pl-12">Phone</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {data?.map((d, i) => (
                <tr
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  key={i}
                >
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">{d?.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">{d?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">{d?.phone}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
