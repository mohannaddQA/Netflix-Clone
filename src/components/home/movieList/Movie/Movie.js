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
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MovieModal from "./MovieModal/MovieModal";
import { useState } from "react";

export default function Movie(props) {
  /// modal control and overlay
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(30px) " />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  ///

  /// handling call back , create a function that will act like anchor between parent and child and it will take data from child
  function HandleCallBack(childsData) {
    onClose(childsData);

    // console.log("THIS DATA IS FROM CHILD TO PARENT ", childsData);
  }
  //////////////////////////this use state is to set our clicked movie when clicking

  const [clickedMovie, setclickedMovie] = useState({});
  function handleClickedMovie(item) {
    setclickedMovie(item);
  }
  return (
    <>
      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {props.movieList.map((movie) => {
            const cards = (
              <>
                <Card maxW="sm">
                  <CardBody size="sm" background="gray.100">
                    <center>
                      <Image
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />
                    </center>

                    <Stack mt="6" spacing="3">
                      <Heading size="md">{movie.title} </Heading>
                      <Text>{movie.overiew}</Text>
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
                        Add to favorite list
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
      <MovieModal
        clickedMovie={clickedMovie}
        isOpen={isOpen}
        overlay={overlay}
        HandleCallBack={HandleCallBack} //here im sending my anchor function to the child so it can take the new data from it
      />
    </>
  );
}
