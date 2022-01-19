import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
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
  const [success, setSuccess] = useState<boolean>(false);
  const btnRef: any = useRef();

  //Delete hooks
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onClosed = () => setIsOpened(false);
  const deleteCancelRef: any = useRef();

  //Update Data Hooks
  const [formData, setFormData] = useState({
    title: String,
    description: String,
    status: Boolean,
    date: Date,
  });
  const [uId, setUId] = useState<string | number | null>(null);

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
      setIsOpened(true);
      setSuccess(true);
    } catch (error) {
      setIsOpened(true);
      setSuccess(false);
    }
  };

  //HandleInputChange function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Updating the agenda item
  const handleUpdate = async () => {
    console.log("id:", uId);
    try {
      await axios.patch(`${BELink}/agenda/${uId}`, formData);
      onClose();
    } catch (err) {
      setIsOpened(true);
      setSuccess(false);
    }
  };

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
                  ref={btnRef}
                  onClick={() => {
                    setUId(e._id);
                    onOpen();
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
        leastDestructiveRef={deleteCancelRef}
        onClose={onClosed}
        isOpen={isOpened}
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
              <Text>Failed to complete the action, something went wrong</Text>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" ref={deleteCancelRef} onClick={onClosed}>
              Ok
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Alert Dialog End*/}

      {/* Update Drawer  Start */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update your agenda Item</DrawerHeader>

          <DrawerBody>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                type="text"
                name="title"
                placeholder="Enter the new agenda title (optional)"
                _placeholder={{ color: "gray.100" }}
                onChange={handleInputChange}
              />

              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                type="text"
                name="description"
                placeholder="Enter the new agenda description (optional)"
                _placeholder={{ color: "gray.100" }}
                onChange={handleInputChange}
              />

              <FormLabel htmlFor="status">Is it completed?</FormLabel>

              <RadioGroup name="status">
                <Stack spacing={5} direction="row" onChange={handleInputChange}>
                  <Radio colorScheme="red" value="true">
                    Yes
                  </Radio>
                  <Radio colorScheme="green" value="false">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>

              <FormLabel htmlFor="date">Completion Date</FormLabel>
              <Input
                id="date"
                type="date"
                name="date"
                onChange={handleInputChange}
              />
            </FormControl>
            {/* Form End */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleUpdate();
              }}
              colorScheme="teal"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Update Drawer  End */}

      {/* Exporting the agenda items as CSV */}
      {agendaItems && <ExportCSV agendaItems={agendaItems} />}
    </>
  );
};

export { GetAgenda };
