// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/router";
import superjson from "superjson";
// Notice the <AppRouter> generic here.
export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});
