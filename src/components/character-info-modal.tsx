"use client";

import { Character } from "@/types";
import { CloseButton, DataList, Dialog, Portal } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";

type CharacterInfoModalContextType = {
  setCharacterId: (id: string) => void;
};

const CharacterInfoModalContext = createContext<CharacterInfoModalContextType>({
  setCharacterId: () => {},
});

type CharacterInfoModalProviderProps = {
  characters: Character[];
  children: React.ReactNode;
};

export function CharacterInfoModalProvider({
  characters,
  children,
}: CharacterInfoModalProviderProps) {
  const [characterId, setCharacterId] = useState<string | null>(null);
  const char = characters.find((x) => x.id === characterId);

  return (
    <CharacterInfoModalContext.Provider value={{ setCharacterId }}>
      {children}
      {char && (
        <Dialog.Root
          placement="center"
          open={characterId !== null}
          onOpenChange={(e) => {
            if (!e.open) {
              setCharacterId(null);
            }
          }}
        >
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>{char.name}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <DataList.Root orientation="horizontal">
                    <DataList.Item>
                      <DataList.ItemLabel>Status</DataList.ItemLabel>
                      <DataList.ItemValue>{char.status}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.ItemLabel>Species</DataList.ItemLabel>
                      <DataList.ItemValue>{char.species}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.ItemLabel>Type</DataList.ItemLabel>
                      <DataList.ItemValue>{char.type}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.ItemLabel>Gender</DataList.ItemLabel>
                      <DataList.ItemValue>{char.gender}</DataList.ItemValue>
                    </DataList.Item>
                  </DataList.Root>
                </Dialog.Body>
                <Dialog.CloseTrigger asChild>
                  <CloseButton onClick={() => setCharacterId(null)} />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      )}
    </CharacterInfoModalContext.Provider>
  );
}

export const useCharacterInfoModal = () =>
  useContext(CharacterInfoModalContext);
