import {
  Image,
  Heading,
  Flex,
  Spacer,
  Button,
  useColorModeValue,
  Box,
  Link,
} from "@chakra-ui/react";
import logo from "../../assits/images/logo.png"; //local sources must be imported

export default function NavBar() {
  // always do the export with the function
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Image borderRadius="full" boxSize="150px" src={logo} alt="logo" />
        <Heading>
          MOVIE <br /> HUNTER
        </Heading>
        <Spacer />{" "}
        <Box>
          {" "}
          <Link href="/">
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="blue.500"
            >
              Home
            </Button>
          </Link>
          <br />
          <br />
          <Link href="/favmovies">
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="blue.500"
            >
              favorite list
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
