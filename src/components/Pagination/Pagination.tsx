import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ totalPages }: any) => {
  return (
    <>
      <Container>
        <Flex alignItems="center">
          <Text>Total Pages :{totalPages}</Text>
          <Button>Prev</Button>
          <Button>Next</Button>
        </Flex>
      </Container>
    </>
  );
};

export { Pagination };
