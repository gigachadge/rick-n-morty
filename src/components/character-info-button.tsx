"use client";

import { Button } from "@chakra-ui/react";
import { useCharacterInfoModal } from "./character-info-modal";

type CharacterInfoButtonProps = {
  characterId: string;
};

export function CharacterInfoButton({ characterId }: CharacterInfoButtonProps) {
  const { setCharacterId } = useCharacterInfoModal();

  return (
    <Button
      variant="outline"
      size="xs"
      onClick={() => setCharacterId(characterId)}
    >
      More info
    </Button>
  );
}
