import { UserModal } from "@/components/user-modal";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh" padding="5">
      <Flex as="header" paddingBottom="5">
        <UserModal />
      </Flex>
      <Flex as="main" flex="1">
        <Text>Nothing to see here.</Text>
      </Flex>
      <Flex as="footer" justifyContent="center" paddingTop="5">
        <Text>Version: 3.5</Text>
      </Flex>
    </Flex>
  );
}
