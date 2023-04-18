import { t } from '$lib/trpc/t';
export const publicProcedure = t.procedure;
export const protectedProcedure = 
    t.procedure
        .use(({ next, ctx }) => {
            console.log(next)
        if (!ctx.user || !ctx.session) {
            throw new TRPCError({ code: 'UNAUTHORIZED'});
        }
        return next({ ctx });
    });
