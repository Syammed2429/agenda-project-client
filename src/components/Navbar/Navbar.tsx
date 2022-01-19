import React, { FC } from "react";
import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import logo from "../../assets/logo.png";
const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex alignItems="center">
        {/* Logo */}
        <Image w={120} src={logo} alt="Agenda logo" />

        {/* Navbar Items start */}
        <HStack position="absolute" right="0" spacing="24px">
          <Text>Add Agenda</Text>
          <Text>Check Agenda Items & export</Text>
          <Text>Import CSV</Text>

          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </HStack>
        {/* Navbar Items End */}
      </Flex>
    </>
  );
};

export { Navbar };
