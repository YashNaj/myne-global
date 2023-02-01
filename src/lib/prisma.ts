import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
let data = await prisma.user.findMany();
console.log(data);