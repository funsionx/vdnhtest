import { Card, CardBody, CardFooter, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ICard } from "../Interfaces";
import styles from "../../styles/Card.module.scss";

interface CardProps {
  card: ICard;
}

export default function CardComponent({ card }: CardProps) {
  return (
    <Link href={"/testpage"}>
      <Card backgroundColor='whitesmoke' borderRadius="10%" maxW="fit-content" >
        <CardBody>
          <Img w="150px" borderRadius="5%" src={card.bgpic} />

          <Text textAlign="center" paddingTop="5%">
            {card.title}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}
