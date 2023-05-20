import {
  Modal,
  ModalContent,
  ButtonGroup,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Image,
  Input,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

export default function MovieModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addclickedMovie, setaddclickedMovie] = useState({});
  ///////////////
  const SendRequest = async (e) => {
    e.preventDefault();
    const addclickedMovie_ = {
      id: props.clickedMovie.id,
      title: props.clickedMovie.title,
      poster: props.clickedMovie.poster_path,
      summary: props.clickedMovie.overiew,
      rate: "",
      comments: "",
    };
    console.log("this movie will be sent to the server", addclickedMovie_);

    setaddclickedMovie(addclickedMovie_);
    console.log("this movie will be sent to the server", addclickedMovie_);
    try {
      await axios
        .post(`https://movies-library-dcw0.onrender.com/addMovies`, {
          addclickedMovie_,
        })
        .then((res) => {
          console.log(res, addclickedMovie);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  // };
  ///////////
  return (
    <>
      <Modal isCentered isOpen={props.isOpen} onOpen onClose={onClose}>
        //{" "}
        {/* {console.log("this is the props after clicking add", props.isOpen)}*/}
        {props.overlay}
        <ModalContent>
          <ModalCloseButton />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.clickedMovie.poster_path}`}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{props.clickedMovie.title}</Heading>
                <Text py="2">{props.clickedMovie.overiew}</Text>
                <Flex>
                  {" "}
                  <Input variant="outline" placeholder="add a comment" />
                  <Button colorScheme="messenger">add</Button>
                </Flex>
              </CardBody>

              <CardFooter>
                <ButtonGroup gap="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onSubmit={SendRequest}
                    /*here it will enable a function that takes in the clicked item */
                  >
                    submit
                  </Button>
                  <Button
                    /* here when you click it will change the state of is open and it will send back the new data
              and this is a way to call two functions without having to use two onClics*/
                    onClick={() => {
                      onClose;
                      props.HandleCallBack(isOpen);
                    }}
                  >
                    Close
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Stack>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
}
// this can't work because it won't send
// back the data at a certain action . try to undersatnd it more later
//  {props.HandleCallBack(isOpen)}; >>> this needs somthing to activate it so we cant put it alone , we must put it with a click
