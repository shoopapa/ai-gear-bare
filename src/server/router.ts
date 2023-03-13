import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return {
      greeting: `hello! bob`,
    };
  }),
});
export type AppRouter = typeof appRouter;
