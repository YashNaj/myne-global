import { t } from '../t';
export const publicProcedure = t.procedure;
export const protectedProcedure = 
    t.procedure
        .use(({ next, ctx }) => {
        if (!ctx.user || !ctx.session) {
            throw new TRPCError({ code: 'UNAUTHORIZED'});
        }
        return next({ ctx });
    });
