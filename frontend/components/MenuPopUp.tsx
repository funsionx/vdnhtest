import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const MenuPopUp = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
          Информация
        </MenuButton>
        <MenuList>
        <Link href={'/info/aboutproject'}><MenuItem>О проекте</MenuItem></Link>
          <Link href={'/info/aboutus'}><MenuItem>Резюме авторов</MenuItem></Link>
          <Link href={'/info/links'}><MenuItem>Ссылки на наши другие проекты</MenuItem></Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuPopUp;
