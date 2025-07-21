export type CharactersResponse = {
  characters: {
    info: Info;
    results: Character[];
  };
};

export type Info = {
  pages: number;
};

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};
