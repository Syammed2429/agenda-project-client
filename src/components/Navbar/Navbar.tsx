import React, { FC } from "react";
import {
  BsMoonFill,
  BsSunFill,
  BsFillCloudUploadFill,
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormAdd } from "react-icons/gr";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Flex boxShadow="dark-lg" p="3" alignItems="center" w="100%">
          {/* Logo */}
          <Link to="/">
            <Image w={120} src={logo} alt="Agenda logo" />
          </Link>

          {/* Navbar Items start */}
          <HStack
            display={{ base: "none", md: "flex" }}
            position="absolute"
            right="4"
            spacing="24px"
            fontSize="18"
          >
            <Link to="/">
              <Text>Add Agenda</Text>
            </Link>

            <Text>Get Agenda Items & export into CSV</Text>
            <Text>Import CSV</Text>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            </Button>
          </HStack>
          {/* Navbar Items End */}

          {/* Responsive Navbar items Start*/}
          <Box
            display={{ base: "flex", md: "none" }}
            position="fixed"
            right="5"
            fontSize="18"
            gap={4}
          >
            <Button variant="outline" onClick={toggleColorMode}>
              {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            </Button>

            <Menu>
              <MenuButton
                as={IconButton}
                // aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<GrFormAdd />}>Add Agenda</MenuItem>
                <MenuItem icon={<BsFillCloudUploadFill />}>
                  Get Agenda Items & export into CSV
                </MenuItem>
                <MenuItem icon={<BsFillCloudDownloadFill />}>
                  Import CSV
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          {/* Responsive Navbar items End*/}
        </Flex>
      </Box>
    </>
  );
};

export { Navbar };
