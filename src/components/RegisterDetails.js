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
import { useParams } from "react-router-dom";
import { registerVersion } from "firebase/app";
import useGetData from "../hooks/useGetData";

export default function RegisterDetails() {
  const { slug } = useParams();
  console.log("hello");

  const { result } = useGetData("verification", slug);

  if (!result) {
    return <p>Loading</p>;
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
              <Th>{result.fname}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>Last Name</Th>
              <Th>{result.lname}</Th>
            </Tr>
            <Tr>
              <Th>Date Of Birth</Th>
              <Th>{result.age}</Th>
            </Tr>
            <Tr>
              <Th>Address</Th>
              <Th>{result.address}</Th>
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
            <Image className="h-50vh" src={result.LicenseFile} alt="Dan Abramov" />
          </Box>
          <Box style={{ margin: "40px" }} boxSize="sm">
            <h3> Profile </h3>
            <Image src={result.profileFile} alt="Dan Abramov" />
          </Box>
        </Box>

       
      </TableContainer>
      <Center style={{paddingTop:"60px", display: "flex", gap: "15px" }} color="white">
          <Button colorScheme="blue">Accept</Button>
          <Button colorScheme="red">Reject</Button>
        </Center>
    </Box>
  );
}
