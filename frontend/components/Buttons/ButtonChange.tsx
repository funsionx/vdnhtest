import { Button, Container, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../Cards/Card";
import PeopleAmount from "../Poll/PeopleAmount";
//import MorePlacesToVisit from './poll/MorePlacesToVisit';
import PlacesToVisit from "../Poll/PlacesToVisit";
import ButtonSubmit from "./ButtonSubmit";

const ButtonChange = () => {
  const [isShow, setIsShow] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isShow ? (
        <Card />
      ) : (
        <Container>
          <PeopleAmount />
          <Divider />
          <PlacesToVisit />
          <Divider mt="2%" mb="2%" />
          <ButtonSubmit />
        </Container>
      )}
      <Flex justifyContent="center">
        {isClicked ? (
          <Button mt="3%" onClick={handleClick}>
            Слишком маленький выбор... ХОЧУ БОЛЬШЕ!
          </Button>
        ) : (
          <Button mt="1%" maxW="50%" onClick={handleClick}>
            Ладно, я передумал
          </Button>
        )}
      </Flex>
    </>
  );
};

export default ButtonChange;
