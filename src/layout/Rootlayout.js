import React from "react";
import {
    Grid,
    GridItem,
  } from "@chakra-ui/react";

  import Sidebar from "../components/Sidebar"
  import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <Grid  templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
      w="100%"
      h="100vh"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="black"
        minHeight={{ lg: "100vh" }}
      >
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem className="overflow-scroll " h="100vh" as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Rootlayout;
