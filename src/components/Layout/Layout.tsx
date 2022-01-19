import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";

const Layout: FC = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
    </>
  );
};

export { Layout };
