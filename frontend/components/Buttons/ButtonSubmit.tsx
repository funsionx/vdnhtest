import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ButtonSubmit = () => {
  return (
    <Link href={"/testpage"}>
      <Button colorScheme="teal" minW="100%">
        Выбор сделан
      </Button>
    </Link>
  );
};

export default ButtonSubmit;
