import React, { FC, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
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
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter the title of agenda item.</FormHelperText>
            ) : (
              <FormErrorMessage>Title is required.</FormErrorMessage>
            )}
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};

export { AddAgenda };
