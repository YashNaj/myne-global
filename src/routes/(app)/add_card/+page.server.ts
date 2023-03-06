import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { LuciaError } from "lucia-auth";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { session, user } = await locals.validateUser();
    console.log("\u001b[1;31m user", user);

    const form = await request.formData();

    $: console.log(
      "🚀 ~ file: +page.server.ts:13 ~ default: ~ form.category",
      form
    );
    const category = form.get("category")?.toLowerCase();
    const subcategory = form.get("subcategory")?.toLowerCase();
    const brand = form.get("brand")?.toLowerCase();
    const breed = form.get("breed")?.toLowerCase();
    const size = form.get("size")?.toLowerCase();
    const purchasedFrom = form.get("purchasedFrom")?.toLowerCase();
    const purchasedValue = form.get("purchasedValue")?.toLowerCase();
    const reportedStolenDate = form.get("reportedStolenDate")?.toLowerCase();
    const description = form.get("description")?.toLowerCase();
    const crypto_token_address = form
      .get("crypto_token_address")
      ?.toLowerCase();
    const unique_features = form.get("unique_features")?.toLowerCase();
    const artist = form.get("artist")?.toLowerCase();
    const author = form.get("author")?.toLowerCase();
    const dob = form.get("dob")?.toLowerCase();
    const body_length = form.get("body_length")?.toLowerCase();
    const brand_reference = form.get("brand_reference")?.toLowerCase();
    const caliber = form.get("caliber")?.toLowerCase();
    const carat_weight = form.get("carat_weight")?.toLowerCase();
    const case_material = form.get("case_material")?.toLowerCase();
    const cOfAuth = form.get("cOfAuth")?.toLowerCase();
    const clarity = form.get("clarity")?.toLowerCase();
    const color = form.get("color")?.toLowerCase();
    const cut_shape = form.get("cut_shape")?.toLowerCase();
    const date = form.get("date")?.toLowerCase();
    const dial = form.get("dial")?.toLowerCase();
    const distinguishing_features = form
      .get("distinguishing_features")
      ?.toLowerCase();
    const document_array = form.get("document_array")?.toLowerCase();
    const drivetrain = form.get("drivetrain")?.toLowerCase();
    const engine = form.get("engine")?.toLowerCase();
    const engraving = form.get("engraving")?.toLowerCase();
    const exchange_address = form.get("exchange_address")?.toLowerCase();
    const exterior_color = form.get("exterior_color")?.toLowerCase();
    const fuel_type = form.get("fuel_type")?.toLowerCase();
    const grading = form.get("grading")?.toLowerCase();
    const grading_reports = form.get("grading_reports")?.toLowerCase();
    const height = form.get("height")?.toLowerCase();
    const hotstamping = form.get("hotstamping")?.toLowerCase();
    const interior_color = form.get("interior_color")?.toLowerCase();
    const invoice = form.get("invoice")?.toLowerCase();
    const laser_inscription = form.get("laser_inscription")?.toLowerCase();
    const manufacturer = form.get("manufacturer")?.toLowerCase();
    const material = form.get("material")?.toLowerCase();
    const microchip = form.get("microchip")?.toLowerCase();
    const mileage = form.get("mileage")?.toLowerCase();
    const model = form.get("model")?.toLowerCase();
    const model_yr = form.get("model_yr")?.toLowerCase();
    const movement_caliber = form.get("movement_caliber")?.toLowerCase();
    const other = form.get("other")?.toLowerCase();
    const pedigree = form.get("pedigree")?.toLowerCase();
    const product = form.get("product")?.toLowerCase();
    const registration_certificate = form
      .get("registration_certificate")
      ?.toLowerCase();
    const release_date = form.get("release_date")?.toLowerCase();
    const serial = form.get("serial")?.toLowerCase();
    const serie = form.get("serie")?.toLowerCase();
    const series = form.get("series")?.toLowerCase();
    const smart_contract_address = form
      .get("smart_contract_address")
      ?.toLowerCase();
    const smart_contract_id = form.get("smart_contract_id")?.toLowerCase();
    const stock_number = form.get("stock_number")?.toLowerCase();
    const stone = form.get("stone")?.toLowerCase();
    const strap_bracelet = form.get("strap_bracelet")?.toLowerCase();
    const tattoo = form.get("tattoo")?.toLowerCase();
    const trademarks = form.get("trademarks")?.toLowerCase();
    const transaction = form.get("transaction")?.toLowerCase();
    const transmission = form.get("transmission")?.toLowerCase();
    const url = form.get("url")?.toLowerCase();
    const valuation_report = form.get("valuation_report")?.toLowerCase();
    const vin = form.get("vin")?.toLowerCase();
    const wallet_address = form.get("wallet_address")?.toLowerCase();
    const weight = form.get("weight")?.toLowerCase();
    const year = form.get("year")?.toLowerCase();
    const marketPrice = form.get("marketPrice")?.toLowerCase();
    const gender = form.get("gender")?.toLowerCase(); 
    const picturesRawURL = form.get("pictures");
    const pictures = picturesRawURL.split(',')
    console.log(pictures);
    const profile = await prisma.profile.findUnique({
      where: {
        user_id: user.userId,
      },
    });
    const newCard = await prisma.profile.update({
      where: {
        user_id: user.userId,
      },
      data: {
        myneCard: {
          create: {
            category,
            subcategory,
            brand,
            breed,
            size,
            purchasedFrom,
            purchasedValue,
            reportedStolenDate,
            description,
            crypto_token_address,
            unique_features,
            artist,
            author,
            dob,
            body_length,
            brand_reference,
            caliber,
            carat_weight,
            case_material,
            cOfAuth,
            clarity,
            color,
            cut_shape,
            date,
            dial,
            distinguishing_features,
            document_array,
            drivetrain,
            engine,
            engraving,
            exchange_address,
            exterior_color,
            fuel_type,
            grading,
            grading_reports,
            height,
            hotstamping,
            interior_color,
            invoice,
            laser_inscription,
            manufacturer,
            material,
            microchip,
            mileage,
            model,
            model_yr,
            movement_caliber,
            other,
            pedigree,
            product,
            registration_certificate,
            release_date,
            serial,
            serie,
            series,
            smart_contract_address,
            smart_contract_id,
            stock_number,
            stone,
            strap_bracelet,
            tattoo,
            trademarks,
            transaction,
            transmission,
            url,
            valuation_report,
            vin,
            wallet_address,
            weight,
            year,
            marketPrice,
            gender, 
            pictures
          },
        },
      },
    });
    let success = true;
    prisma.$disconnect();
    return {
      message: "Card Added Successfully!",
      success,
    };
  },
};
