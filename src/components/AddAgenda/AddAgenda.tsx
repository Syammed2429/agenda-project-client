import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Stack,
  Radio,
  RadioGroup,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const AddAgenda: FC = () => {
  //Hooks
  const [formData, setFormData] = useState({
    title: String,
    description: String,
    status: Boolean,
    date: Date,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const cancelRef: any = useRef();

  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  //AlertDialog
  const { isOpen, onOpen, onClose } = useDisclosure();

  //HandleInputChange function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Post the agenda items to the backend
  const postData = async (formData: string[] | {}) => {
    try {
      const data = await axios.post(`${BELink}/agenda`, formData);
      if (data.status === 201) {
        onOpen();
        setSuccess(true);
      } else {
        setSuccess(false);
        onOpen();

        return;
      }
    } catch (err) {
      setSuccess(false);
      onOpen();
    }
  };

  //HandleSubmit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.title.length === 0 ||
      formData.description.length === 0 ||
      formData.status.length === 0 ||
      formData.date.length === 0
    ) {
      onOpen();
      return setSuccess(false);
    }
    postData(formData);
  };

  return (
    <>
      <Container>
        {/* Form Starts */}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              type="text"
              name="title"
              placeholder="Enter the agenda title"
              _placeholder={{ color: "gray.100" }}
              onChange={handleInputChange}
            />
            {formData.title.length !== 0 ? (
              <FormHelperText>Enter the title of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}

            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              type="text"
              name="description"
              placeholder="Enter the agenda description"
              _placeholder={{ color: "gray.100" }}
              onChange={handleInputChange}
            />
            {formData.description.length !== 0 ? (
              <FormHelperText>
                Enter the description of agenda item.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Description is required.</FormErrorMessage>
            )}

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

            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              id="date"
              type="date"
              name="date"
              onChange={handleInputChange}
            />

            {formData.date.length !== 0 ? (
              <FormHelperText>Enter the date of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <Button my={3} type="submit">
              Add Agenda
            </Button>
          </FormControl>
        </form>
        {/* Form End */}

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
                <Text>New Item is Successfully added to the agenda</Text>
              ) : (
                <Text>
                  Failed to add an item to the agenda or your input fields are
                  empty
                </Text>
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
      </Container>
    </>
  );
};

export { AddAgenda };
