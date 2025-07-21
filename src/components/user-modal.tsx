"use client";

import { submitUserInfo } from "@/actions/submitUserInfo";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type UserModalProp = {
  username?: string;
  jobTitle?: string;
};

// TODO: fix modal not closing when interacting outside
export function UserModal({ username, jobTitle }: UserModalProp) {
  const hasUserInfo = username && jobTitle;

  const [isOpen, setIsOpen] = useState(!hasUserInfo);

  const handleSubmit = (fd: FormData) => {
    submitUserInfo(fd);
    setIsOpen(false);
  };

  return (
    <Dialog.Root placement="center" open={isOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          User information
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>User information</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {hasUserInfo && (
                <Box paddingBottom="5">
                  <Text fontWeight="bold" marginBottom="2">
                    Current user info:
                  </Text>
                  <Text>Username: {username}</Text>
                  <Text>Job title: {jobTitle}</Text>
                </Box>
              )}
              <form action={handleSubmit}>
                <Stack gap="5">
                  <Field.Root>
                    <Field.Label>Username</Field.Label>
                    <Input name="username" required />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Job title</Field.Label>
                    <Input name="job-title" required />
                  </Field.Root>
                  <Button type="submit">
                    {hasUserInfo ? "Update" : "Submit"}
                  </Button>
                </Stack>
              </form>
            </Dialog.Body>
            {hasUserInfo && (
              <Dialog.CloseTrigger asChild>
                <CloseButton onClick={() => setIsOpen(false)} />
              </Dialog.CloseTrigger>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
