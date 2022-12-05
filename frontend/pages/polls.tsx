//сделать title

//<Image
//      alt="VDNH"
//      src={bgpic}
//     placeholder="blur"
//   quality={100}
// fill
//sizes="100vw"
//style={{
//  objectFit: 'cover',
//zIndex: -9999
//}}
///>
import { Box, Container, Flex, Image, Img } from "@chakra-ui/react";

import { NextPage } from "next";

import React from "react";
import ButtonChange from "../components/Buttons/ButtonChange";
import MenuPopUp from "../components/MenuPopUp";

import bgpic from "../public/6-9.jpg";
import logo from "../public/vdnhLogo.png";

const polls: NextPage = () => {
  return (
    <Flex minW="100vw" minH="100vh" alignItems="center" justifyContent="center" flexDirection="column">
      <MenuPopUp />
      <Flex flexDirection="column" justifyContent="space-between">
        <Flex
          flexDirection="column"
          minWidth="33%"
          padding={3}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <ButtonChange />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default polls;
