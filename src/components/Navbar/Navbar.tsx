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
  Spacer,
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

            <Link to="/get-agenda">
              <Text>Get Agenda Items & export into CSV</Text>
            </Link>

            <Link to="import-csv">
              <Text>Import CSV</Text>
            </Link>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            </Button>
          </HStack>
          {/* Navbar Items End */}

          {/* Responsive Navbar items Start*/}

          <Spacer />
          <Box display={{ base: "flex", md: "none" }} fontSize="18" gap={4}>
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
              <MenuList z-index="1">
                <Link to="/">
                  <MenuItem icon={<GrFormAdd />}>Add Agenda</MenuItem>
                </Link>

                <Link to="/get-agenda">
                  <MenuItem icon={<BsFillCloudUploadFill />}>
                    Get Agenda Items & export into CSV
                  </MenuItem>
                </Link>

                <Link to="import-csv">
                  <MenuItem icon={<BsFillCloudDownloadFill />}>
                    Import CSV
                  </MenuItem>
                </Link>
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
