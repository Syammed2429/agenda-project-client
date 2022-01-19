import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ totalPages, setPage, page }: any) => {
  let arr: number[] = [];

  //looping through the total number of pages  and pushing it in the arr
  for (let i = 1; i <= totalPages; i++) {
    arr.push(i);
  }

  return (
    <>
      <Container>
        <Flex alignItems="center">
          <Text>Total Pages :{totalPages}</Text>
          <Button
            onClick={() => {
              setPage((prev: number) => prev - 1);
            }}
            isDisabled={page === 1}
          >
            Prev
          </Button>
          {arr.map((e) => (
            <Box key={e}>
              <Button
                onClick={() => {
                  setPage(e);
                }}
              >
                {e}
              </Button>
            </Box>
          ))}
          <Button
            onClick={() => {
              setPage((prev: number) => prev + 1);
            }}
            disabled={page === arr.length}
          >
            Next
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export { Pagination };
