import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Routers } from "../Routers/Routers";

const Layout: FC = () => {
  return (
    <>
      <Box>
        <Routers />
      </Box>
    </>
  );
};

export { Layout };
