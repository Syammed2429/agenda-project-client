import React, { FC, useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { ExportCSV } from "../ExportCSV/ExportCSV";

const GetAgenda: FC = () => {
  //Hooks
  const [agendaItems, setAgendaItems] = useState<
    | {
        _id: string | number;
        title: string;
        description: string;
        status: boolean;
        date: string | number;
      }[]
    | null
  >(null);
  const cancelRef: any = useRef();
  const [success, setSuccess] = useState<boolean>(false);

  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  //AlertDialog
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    //Fetching all the agenda items from the backend
    const getAllAgendaItems = async () => {
      const { data } = await axios.get(`${BELink}/agenda`);
      setAgendaItems(data.agendas);
    };
    getAllAgendaItems();
  }, [BELink, agendaItems]);

  //Delete a particular agenda item
  const handleDelete = async (id: string | number) => {
    try {
      await axios.delete(`${BELink}/agenda/${id}`);
      onOpen();
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      onOpen();
    }
  };

  //Updating the agenda item
  const handleUpdate = (id: string | number) => {};

  return (
    <>
      {/* <Container> */}
      <Center py={5}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing="8">
          {/* Mapping through each item and rendering it */}
          {agendaItems?.map((e) => (
            <Box
              spacing="3"
              p="10"
              w={280}
              textAlign="center"
              rounded="lg"
              boxShadow="dark-lg"
              key={e._id}
              _hover={{ cursor: "pointer" }}
            >
              <Text>Title : {e.title}</Text>
              <Text>Added on : {e.date}</Text>
              <Text>Desc : {e.description}</Text>
              <Text>Status : {e.status ? "Completed" : "Not Completed"}</Text>

              {/* Buttons for update and delete operations Start*/}
              <Flex justify="space-around" py={4}>
                <Button
                  onClick={() => {
                    handleUpdate(e._id);
                  }}
                  colorScheme="green"
                >
                  Update
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleDelete(e._id);
                  }}
                >
                  Delete
                </Button>
              </Flex>
              {/* Buttons for update and delete operations End */}
            </Box>
          ))}
        </SimpleGrid>
      </Center>
      {/* </Container> */}
      {/* Alert Dialog Start*/}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            {success ? <Text>Success</Text> : <Text>Error</Text>}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {success ? (
              <Text>New Item is Successfully deleted from the agenda</Text>
            ) : (
              <Text>Failed to delete an item from the agenda</Text>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" ref={cancelRef} onClick={onClose}>
              Ok
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Alert Dialog End*/}

      {agendaItems && <ExportCSV agendaItems={agendaItems} />}
    </>
  );
};

export { GetAgenda };
