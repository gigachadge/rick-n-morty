import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

export function UserModal() {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Button variant="outline">User information</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>User information</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>todo</Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
