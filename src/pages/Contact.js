import { Center } from "@chakra-ui/react";
import React from "react";
import OrderList from "../components/OrderList";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import ConatactList from "../components/ConatactList";

function Contact() {

    const {document} = useCollection('contact')
    console.log(document)

    if(!document){
        return <h3>Loading</h3>
    }
    
    return (
        <Center>
            <div className="xl:w-3/4 2xl:w-4/5 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Contact list</p>
                        <div className="mt-4 sm:mt-0">
                            <button className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Lists</p>
                            </button>
                        </div>
                    </div>
                    
                </div>
                {
                   document && document.map((item,i) =>{
                        return <ConatactList key={i} item={item} />
                    })
                }
                
            </div>
        </Center>
    );
}

export default Contact;