import React, { useState } from "react";
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
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { registerVersion } from "firebase/app";
import useGetData from "../hooks/useGetData";
import { useFirestore } from "../hooks/useFirestore";
import { Timestamp, addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config";

export default function RegisterDetails() {
  const { slug } = useParams();
  

  const navigate = useNavigate()
  

  

  const { result } = useGetData("verification", slug);
  console.log(result)

  if (!result) {
    return <p>Loading</p>;
  }

  const noteRef = doc(db, "verification", result.uid);


  const acceptHandler = async () =>{
    console.log("hello")

    
    await updateDoc(noteRef, {
      ...result,register:true
    });

    navigate("/")
  

    
  }

  const rejectHandler = async () =>{
    console.log("hello")

    
    await updateDoc(noteRef, {
      ...result,register:false
    });

    navigate("/")
  

    
  }


  

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
              <Th>{result && result.fname}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>Last Name</Th>
              <Th>{result && result.lname}</Th>
            </Tr>
            <Tr>
              <Th>Date Of Birth</Th>
              <Th>{result && result.age}</Th>
            </Tr>
            <Tr>
              <Th>Address</Th>
              <Th>{result && result.address}</Th>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Tfoot>
        </Table>
        <Box style={{ display: "flex" }}>
          <Box style={{ margin: "40px" }} boxSize="sm">
            <h3> Profile </h3>
            <Image className="h-50vh" src={result && result.LicenseFile} alt="Dan Abramov" />
          </Box>
          <Box style={{ margin: "40px" }} boxSize="sm">
            <h3> Profile </h3>
            <Image src={result && result.profileFile} alt="Dan Abramov" />
          </Box>
        </Box>

       
      </TableContainer>
      <Center style={{paddingTop:"60px", display: "flex", gap: "15px" }} color="white">
          <Button onClick={acceptHandler} colorScheme="blue">Accept</Button>
          <Button onClick={rejectHandler} colorScheme="red">Reject</Button>
        </Center>
    </Box>
  );
}
