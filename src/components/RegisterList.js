import React from "react";
import { Link } from "react-router-dom";

const RegisterList = ({ item }) => {
  const { profileFile, fname, lname, age, address,id } = item;
  return (
    <Link to={`/register/${id}`}>
    <div className="bg-white px-4 md:px-10 mb-6">
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            <tr className="text-sm leading-none text-gray-600 h-16">
              <td className="w-1/2">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                    <img
                      className="w-10 h-10 object-cover text-xs font-bold leading-3 text-white"
                      src={profileFile}
                      alt="profile"
                    />
                  </div>
                  <div className="pl-2">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {fname + " " + lname}
                    </p>
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      {age}{" "}
                    </p>
                  </div>
                </div>
              </td>
              <td className="pl-16">
                <p>{address}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Link>
  );
};

export default RegisterList;
