import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>

      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>

      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
      <Box bg="white" h="200" border="1px solid"></Box>
    </SimpleGrid>
  );
}
