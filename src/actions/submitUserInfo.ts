"use server";

import { cookies } from "next/headers";

export async function submitUserInfo(fd: FormData) {
  const username = fd.get("username") as string;
  const jobTitle = fd.get("job-title") as string;

  const cookieStore = await cookies();

  cookieStore.set("username", username);
  cookieStore.set("job-title", jobTitle);
}
