import { getUser } from "$lib/server/server";
import { handleServerSession } from "@lucia-auth/sveltekit";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { getSessionUser } from "$lib/server/lucia";
import { auth } from "$lib/server/lucia";
import { Prisma, PrismaClient } from "@prisma/client";
import { cardPropsArray, cardProps, isHeirloom } from "../cardProps";
const prisma = new PrismaClient();
const anyoneAllowed = [
  "/signup",
  "/signout",
  "/signin",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/unverified-email",
  "/test",
  "/test2",
];
export const load = handleServerSession((async ({ url, locals }) => {
  const onUnauthedRoute = anyoneAllowed.some((route) => url.pathname.startsWith(route));
  const { session, user } = await locals.validateUser();
  if (onUnauthedRoute) return {};
  else if (!session) {
    throw redirect(303, "/signin");
  } else if (user?.valid) {
    let user_id = user.userId;
    console.log(user);

    // const query = {
    //   where: {
    //     AND: cardPropsArray.map((prop) => {
    //       if (acceptable.includes(prop) === true) {
    //         return { [prop]: true };
          
    //       }
    //       else if (accpetable.includes(dateTime) === true){
    //       } 
    //       else {
    //         return { [prop]: true };
    //       }
    //     }),
    //   },
    //   select: Object.fromEntries(
    //     cardPropsArray
    //       .filter((prop) => acceptable.includes(prop))
    //       .map((prop) => [prop, true])
    //   ),}
    
    let myneCard = await prisma.myneCard.findMany({
      where: {
        user_id,
      },
      select: {
      
          isStolen: true,
          isHeirloom: true,
          pictures: true,
          category: true,
          subcategory: true,
          brand: true,
          breed: true,
          size: true,
          purchasedFrom: true,
          purchasedValue: true,
          reportedStolenDate: true,
          description: true,
          crypto_token_address: true,
          unique_features: true,
          artist: true,
          author: true,
          dob: true,
          body_length: true,
          brand_reference: true,
          caliber: true,
          carat_weight: true,
          case_material: true,
          cOfAuth: true,
          clarity: true,
          color: true,
          cut_shape: true,
          date: true,
          dial: true,
          distinguishing_features: true,
          document_array: true,
          drivetrain: true,
          engine: true,
          engraving: true,
          exchange_address: true,
          exterior_color: true,
          fuel_type: true,
          grading: true,
          grading_reports: true,
          height: true,
          hotstamping: true,
          interior_color: true,
          invoice: true,
          laser_inscription: true,
          manufacturer: true,
          material: true,
          microchip: true,
          mileage: true,
          model: true,
          model_yr: true,
          movement_caliber: true,
          other: true,
          pedigree: true,
          product: true,
          registration_certificate: true,
          release_date: true,
          serial: true,
          serie: true,
          series: true,
          smart_contract_address: true,
          smart_contract_id: true,
          stock_number: true,
          stone: true,
          strap_bracelet: true,
          tattoo: true,
          trademarks: true,
          transaction: true,
          transmission: true,
          url: true,
          valuation_report: true,
          vin: true,
          wallet_address: true,
          weight: true,
          year: true,
          marketPrice: true
      }
    })
    const filteredCards = myneCard.filter(obj => Object.values(obj).some(val => val !== null));
    
    console.log("🚀 ~ file: +layout.server.ts:139 ~ load ~ filteredCards:", filteredCards)
  

    const profile = await prisma.user
      .findUnique({
        where: {
          id: user_id,
        },
      })
      .profile();

    return { isUser: true, myneCard, profile };
  } else throw redirect(302, "/unverified-email");
}) satisfies LayoutServerLoad);
