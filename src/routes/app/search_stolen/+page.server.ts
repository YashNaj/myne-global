import { auth } from "$lib/server/lucia";
import { getUser } from "$lib/server/server";
import { INTERNAL_SERVER_ERROR } from "$lib/utils/errors";
import { json, type RequestHandler } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import { handleServerSession } from '@lucia-auth/sveltekit';

// export const GET: RequestHandler = async ({ locals }) => {
//   const prisma = new PrismaClient();
//     try {
//         const stolenWatch = await prisma.stolenWatches.findUnique({
//           where: {
//             caseSerialNumber: '4945414'
//           },
//           select:{
//             manufacture: true,
//             reference_: true,
//             model: true,
//             caseSerialNumber: true
//           }
//         });
//         return json({ stolenWatch })
//     } catch (err) {
//         console.log(err)
//         throw INTERNAL_SERVER_ERROR(err)
//     }
//     prisma.$disconnect()
// }
export const load: PageServerLoad = async (event) => {
  return {
    stolenWatches,
  };
};

let stolenWatches = [{}]; 



console.log(stolenWatches)

export const actions: Actions = {
  default: async ({ response, request, locals }) => {
    const form = await request.formData();
    console.log(form);
    const serial = form.get("serialNumber") as string;
    try{
      const stolenWatch = await fetch(
        "http://localhost:5173/api/get-records", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            serialNumber: serial,
          })
        }
      ).then((data) => {
            return data.json();
            
      })
      console.log('\x1b[36m%s\x1b[0m', stolenWatch); // Cyan
      stolenWatches.splice(0, stolenWatches.length)
      stolenWatches.push(stolenWatch)
      console.log(stolenWatches)
      console.log("Watch Pinged Stolen ")
      return {stolenWatches}, {message: "Watch Pinged Stolen"}
    }
    catch(err){
      console.log(err);
      throw INTERNAL_SERVER_ERROR(err);
    }
       // const prisma = new PrismaClient();
    // try {
      
    //   const stolenWatch = await fetch(
    //     "http://localhost:5173/api/get-records", {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         caseSerialNumber: serial,
    //       })
    //     }
    //   ).then((data) => {
    //     console.log(data.json());

    //     return data.json();
    //   });
    //   console.log(stol)
    //   return { message: "success" }, { stolenWatch };
    // } catch (err) {
    //   console.log(err);
    //   throw INTERNAL_SERVER_ERROR(err);
    // }
  }
};
