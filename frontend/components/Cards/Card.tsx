import useSWR from "swr";
import CardComponent from "./CardComponent";
import { ICard } from "../Interfaces";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Card() {
  const { data, error } = useSWR("/api/cards", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
    >
      {data.map((props: ICard) => (
        <CardComponent key={props.id} card={props} />
      ))}
    </SimpleGrid>
  );
}

export default Card;
