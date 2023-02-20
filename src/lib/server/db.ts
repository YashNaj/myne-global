import prisma from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { PrismaClient, Prisma } from '@prisma/client';


 
export default prisma(new PrismaClient());
