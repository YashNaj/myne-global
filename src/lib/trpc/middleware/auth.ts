import { t } from "$lib/trpc/t";
import { TRPCError } from '@trpc/server';
//authorization middleWare for various routes
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ next, ctx }) => {
  console.log(next);
  if (!ctx.user || !ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const user = ctx.user;
  console.log(user);
  return next({ ctx, user });
});

//admin owner role check 
export const adminProcedure = t.procedure.use(({ next, ctx }) => {
  console.log(next);
  if (!ctx.user || !ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  if (ctx.user.role !== "ADMIN" || ctx.user.role !== "OWNR") {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const user = ctx.user;
  console.log(user);
  return next({ ctx, user });
});
//repair role check
export const repairProcedure = t.procedure.use(({ next, ctx }) => {
  console.log(next);
  if (!ctx.user || !ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  if (!(ctx.user.role === "RPAIR" || ctx.user.role === "ADMIN" || ctx.user.role === "OWNR")) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const user = ctx.user;
  console.log(user);
  return next({ ctx, user });
});
//dist role check
export const distProcedure = t.procedure.use(({ next, ctx }) => {
    console.log(next);
    if (!ctx.user || !ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    if (!(ctx.user.role === "DIST" || ctx.user.role === "ADMIN" || ctx.user.role === "OWNR")) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    const user = ctx.user;
    console.log(user);
    return next({ ctx, user });
  });