import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  HStack,
  Spacer,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 2000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as="nav" p="10" alignItems="center" mb="40px">
      <Heading as="h1">Davron Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar src="./img/luigi.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>dm@mr.humble.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
