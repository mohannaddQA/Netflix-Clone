import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import {
  Center,
  Card,
  Grid,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function FavMovies() {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [favMovieList, setfavMovieList] = useState([]);
  async function getfavMovieList() {
    const favMovieList = await axios.get(
      `https://movies-library-dcw0.onrender.com/getMovies`
      // `http://localhost:3002/getMovies`
    );
    setfavMovieList(favMovieList.data);
  }

  const [clickedMovie, setclickedMovie] = useState({});
  function handleClickedMovie(item) {
    setclickedMovie(item);
  }

  useEffect(() => {
    getfavMovieList();
  }, []);

  return (
    <>
      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {favMovieList.map((movie) => {
            const cards = (
              <>
                <Card maxW="sm">
                  <CardBody size="sm" background="gray.100">
                    <center>
                      <Image
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster}`}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                    </center>

                    <Stack mt="6" spacing="3">
                      <Heading size="md">{movie.title} </Heading>
                      <Text>{movie.summary}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => {
                          setOverlay(<OverlayOne />);
                          onOpen();
                          handleClickedMovie(movie);
                        }}
                      >
                        update
                      </Button>
                      <Button
                        variant="solid"
                        colorScheme="red"
                        onClick={() => {
                          setOverlay(<OverlayOne />);
                          onOpen();
                          handleClickedMovie(movie);
                        }}
                      >
                        delete
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
                {/*we must have the modal inside the map so we can pass in the item 
              and the reasion the movie model twice , once incide the loop and once outside 
            because i don'e want to loop throght the rest of the sens props */}
              </>
            );
            return cards;
          })}
        </Grid>
      </Center>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
