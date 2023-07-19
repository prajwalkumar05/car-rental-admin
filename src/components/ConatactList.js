import React from "react";
import {Link} from "react-router-dom"

const ConatactList = ({ item }) => {
  const { email, message, name,id  } = item;


  return (
    <Link to={`/contact/${id}`}>
      <div className="bg-white px-4 md:px-10 mb-6">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className="text-sm leading-none text-gray-600 h-16">
                <td className="w-1/2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                      <p className="text-xs font-bold leading-3 text-white">
                        {name.charAt(0).toUpperCase()}
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-16">
                  <p>{email}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};

export default ConatactList;
