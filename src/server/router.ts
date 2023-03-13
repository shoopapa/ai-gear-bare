import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return {
      greeting: `hello! ${ctx.auth?.userId}`,
    };
  }),
});
export type AppRouter = typeof appRouter;
