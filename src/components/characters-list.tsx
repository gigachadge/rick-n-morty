import { Character } from "@/types";

type CharactersListProp = {
  characters: Character[];
};

export function CharactersList({ characters }: CharactersListProp) {
  return (
    <div>
      {characters.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
}
