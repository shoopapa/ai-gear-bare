import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import * as trpcExpress from "@trpc/server/adapters/express";
import {
  ClerkExpressWithAuth,
  LooseAuthProp,
  WithAuthProp,
} from "@clerk/clerk-sdk-node";
import express from "express";
import { createContext } from "./context";
import { appRouter } from "./router";
import { nodeHTTPRequestHandler } from "@trpc/server/dist/adapters/node-http";
declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
// app.get("/trpc", , (req, res) => {
//   console.log(req.auth);
// });

app.listen(4000);
