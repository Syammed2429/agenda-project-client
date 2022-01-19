import React, { ChangeEvent, FC, FormEvent, useState } from "react";
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
} from "@chakra-ui/react";

const AddAgenda: FC = () => {
  //Hooks
  const [formData, setFormData] = useState({
    title: String,
    description: String,
    status: Boolean,
    date: Date,
  });

  //HandleInputChange function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //HandleSubmit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
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

            <RadioGroup defaultValue="false" name="status">
              <Stack spacing={5} direction="row" onChange={handleInputChange}>
                <Radio colorScheme="red" value="true">
                  Yes
                </Radio>
                <Radio colorScheme="green" value="false">
                  No
                </Radio>
              </Stack>
            </RadioGroup>

            <FormLabel htmlFor="date">date</FormLabel>
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
      </Container>
    </>
  );
};

export { AddAgenda };
