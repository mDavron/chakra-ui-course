import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  HStack,
  Spacer,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10" alignItems="center" mb="40px">
      <Heading as="h1">Davron Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>dm@mr.humble.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}
