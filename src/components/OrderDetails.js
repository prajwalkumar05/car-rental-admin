import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
  } from "@chakra-ui/react";
  import { useNavigate, useParams } from "react-router-dom";
import useGetData from '../hooks/useGetData';


const OrderDetails = () => {


    const { id } = useParams();
  

  
    const { result } = useGetData("orders", id);
    console.log(result)
  
    if (!result) {
      return <p>Loading</p>;
    }

    const {firstName,lastname,phone_number,from,to,email,date,time,luggage,persons,cardNumber,orderAt,description} =result

  return (
    <Box
    style={{
      border: "1px solid red",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
    w="100%"
    p={4}
    color="black"
  >
    <TableContainer>
      <Box style={{ margin: "30px", textAlign: "center" }}>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
          Details of Register
        </h1>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>{firstName}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>Last Name</Th>
            <Th>{lastname}</Th>
          </Tr>
          <Tr>
            <Th>Phone Number</Th>
            <Th>{phone_number}</Th>
          </Tr>
          <Tr>
            <Th>From</Th>
            <Th>{from}</Th>
          </Tr>

          <Tr>
            <Th>to</Th>
            <Th>{to}</Th>
          </Tr>

          <Tr>
            <Th>Email</Th>
            <Th>{email}</Th>
          </Tr>

          <Tr>
            <Th>Date</Th>
            <Th>{date}</Th>
          </Tr>

          <Tr>
            <Th>time</Th>
            <Th>{time}</Th>
          </Tr>

          <Tr>
            <Th>luggage</Th>
            <Th>{luggage}</Th>
          </Tr>

          <Tr>
            <Th>Peraons</Th>
            <Th>{persons}</Th>
          </Tr>

          
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Card Number</Th>
            <Th>{cardNumber}</Th>
          </Tr>
        </Tfoot>
      </Table>   
    </TableContainer>
    
  </Box>
  )
}

export default OrderDetails