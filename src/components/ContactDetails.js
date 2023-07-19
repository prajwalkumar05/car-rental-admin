import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import useGetData from '../hooks/useGetData';

const ContactDetails = () => {

    const { id } = useParams();
  


    
  
    
  
    const { result } = useGetData("contact", id);
    console.log(result)
  
    if (!result) {
      return <p>Loading</p>;
    }

    const {name,message,email}= result

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      </div>
      <div className="mb-6">
        <p className="text-gray-600">
          <span className="text-lg font-bold">Email:</span>{' '}
          <span className="text-gray-800">{email}</span>
        </p>
      </div>
      <div>
        <p className="text-gray-600">
          <span className="text-lg font-bold">Message:</span>
        </p>
        <p className="mt-2 text-gray-800">{message}</p>
      </div>
    </div>
  )
}

export default ContactDetails