import React, { FC } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
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
      <Flex boxShadow="dark-lg" p="3" alignItems="center">
        {/* Logo */}
        <Image w={120} src={logo} alt="Agenda logo" />

        {/* Navbar Items start */}
        <HStack position="absolute" right="4" spacing="24px" fontSize="18">
          <Text>Add Agenda</Text>
          <Text>Check Agenda Items & export</Text>
          <Text>Import CSV</Text>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
          </Button>
        </HStack>
        {/* Navbar Items End */}
      </Flex>
    </>
  );
};

export { Navbar };
