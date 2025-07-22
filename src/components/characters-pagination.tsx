"use client";

import { Pagination, ButtonGroup, IconButton } from "@chakra-ui/react";
import Link from "next/link";

type CharactersPaginationProps = {
  totalCount: number;
  pageSize: number;
};

export function CharactersPagination({
  totalCount,
  pageSize,
}: CharactersPaginationProps) {
  return (
    <Pagination.Root count={totalCount} pageSize={pageSize}>
      <ButtonGroup variant="ghost">
        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ _selected: "outline" }} asChild>
              <Link href={`?page=${page.value}`}>{page.value}</Link>
            </IconButton>
          )}
        />
      </ButtonGroup>
    </Pagination.Root>
  );
}
