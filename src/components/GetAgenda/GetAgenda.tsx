import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const GetAgenda: FC = () => {
  //Hooks
  const [agendaItems, setAgendaItems] = useState<
    | {
        _id: string | number;
        date: string | number | Date;
        description: string;
        status: boolean;
        title: string;
      }[]
    | null
  >(null);

  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    //Fetching all the agenda items from the backend
    const getAllAgendaItems = async () => {
      const { data } = await axios.get(`${BELink}/agenda`);
      setAgendaItems(data.agendas);
    };
    getAllAgendaItems();
  }, [BELink]);

  return (
    <>
      {/* <Container> */}
      <Center py={5}>
        <SimpleGrid columns={{ base: 1, md: 4, lg: 5 }} spacing="8">
          {/* Mapping through each item and rendering it */}
          {agendaItems?.map((e) => (
            <Box
              spacing="3"
              p="auto"
              py="65"
              h="60"
              textAlign="center"
              rounded="lg"
              boxShadow="dark-lg"
              key={e._id}
              _hover={{ cursor: "pointer" }}
            >
              <Text>Title : {e.title}</Text>
              <Text>Date : {e.date}</Text>
              <Text>Desc : {e.description}</Text>
              <Text>Status : {e.status ? "Completed" : "Not Completed"}</Text>
              {/* Buttons for update and delete operations Start*/}
              <Flex justify="space-around" py={4}>
                <Button>Update</Button>
                <Button>Delete</Button>
              </Flex>
              {/* Buttons for uopdate and delete operations End*/}
            </Box>
          ))}
        </SimpleGrid>
      </Center>
      {/* </Container> */}
    </>
  );
};

export { GetAgenda };
