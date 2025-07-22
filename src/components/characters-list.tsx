import { Character } from "@/types";
import { Card, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { CharacterInfoButton } from "./character-info-button";

type CharactersListProp = {
  characters: Character[];
};

export function CharactersList({ characters }: CharactersListProp) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 4, lg: 5 }} gap="5">
      {characters.map(({ id, name, image }) => (
        <Card.Root key={id}>
          <Image src={image} alt={name} width={400} height={400} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer flex="1" justifyContent="flex-end">
            <CharacterInfoButton characterId={id} />
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}
