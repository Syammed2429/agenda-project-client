import React, { FC, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Text,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const AddAgenda: FC = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
      <Container>
        <form>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              type="text"
              //   value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter the title of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              type="text"
              //   value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter the title of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <FormLabel htmlFor="status">Status</FormLabel>
            <Text>Is it completed?</Text>

            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Yes
                </Radio>
                <Radio colorScheme="green" value="2">
                  No
                </Radio>
              </Stack>
            </RadioGroup>
            {!isError ? (
              <FormHelperText>Enter the title of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <FormLabel htmlFor="date">date</FormLabel>
            <Input
              id="date"
              type="date"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter the date of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <Button my={3} type="submit">
              Add Agenda
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};

export { AddAgenda };
