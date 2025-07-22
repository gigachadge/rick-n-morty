import { CharacterInfoModalProvider } from "@/components/character-info-modal";
import { CharactersList } from "@/components/characters-list";
import { UserModal } from "@/components/user-modal";
import { createApolloClient } from "@/lib/apollo-client";
import { GET_CHARACTERS } from "@/queries";
import { CharactersResponse } from "@/types";
import { Flex, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { cookies } from "next/headers";
import Link from "next/link";

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value;
  const jobTitle = cookieStore.get("job-title")?.value;

  const hasUserInfo = username && jobTitle;

  let error: string | null = null;
  let data: CharactersResponse | null = null;

  if (hasUserInfo) {
    try {
      const params = await searchParams;
      const page = parseInt(params.page as string) || 1;

      const client = createApolloClient();
      const res = await client.query({
        query: GET_CHARACTERS,
        variables: {
          page,
        },
      });
      data = res.data;
    } catch {
      // TODO improve error handling
      error = "Something went wrong.";
    }
  }

  const renderMainContent = () => {
    if (!hasUserInfo) {
      return <Text>Nothing to see here.</Text>;
    }
    if (error) {
      return <Text>{error}</Text>;
    }
    if (!data || data.characters.results.length === 0) {
      return (
        <Stack>
          <Text>No data.</Text>
          <Text>
            <ChakraLink colorPalette="teal" asChild>
              <Link href="/?page=1">Return to page 1.</Link>
            </ChakraLink>
          </Text>
        </Stack>
      );
    }
    return (
      <CharacterInfoModalProvider characters={data.characters.results}>
        <CharactersList characters={data.characters.results} />
      </CharacterInfoModalProvider>
    );
  };

  return (
    <Flex direction="column" minH="100vh" padding="5">
      <Flex as="header" paddingBottom="5">
        <UserModal username={username} jobTitle={jobTitle} />
      </Flex>
      <Flex as="main" flex="1">
        {renderMainContent()}
      </Flex>
      <Flex as="footer" justifyContent="center" paddingTop="5">
        <Text>Version: 3.5</Text>
      </Flex>
    </Flex>
  );
}
