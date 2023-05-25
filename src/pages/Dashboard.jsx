import { Heading, Text, Container, Box } from "@chakra-ui/react";
export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    ":hover": {
      color: "#000",
      bg: "blue.200",
    },
  };
  return (
    <Container as="section" maxWidth="6xl">
      <Heading my="30px" p="10px">
        Chakra ui Components
      </Heading>
      <Text ml="30px">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet
        Officiis eius?
      </Text>
      <Text marginLeft="30px" color="blue.800" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. dolor sit amet
        Officiis eius
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>
      <Box sx={boxStyles}>
        <Text>Hello Chakra Ui!</Text>
      </Box>
    </Container>
  );
}
