import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { Prisma, PrismaClient } from "@prisma/client";
export const GET: RequestHandler = async () => {
  // // const {user, session} = await locals.validateSessionUser();
  // if (!session){
  //     return (404, {"message": "NO PRIVILEGES"})
  // }
  const prisma = new PrismaClient();

  const jewelry_brands = await prisma.jewelry_brands.findMany();
  const watch_brands = await prisma.watch_brands.findMany();
  const leather_brands = await prisma.leather_brands.findMany();

  const dog_breeds = await prisma.dog_breeds.findMany();
  const cat_breeds = await prisma.cat_breeds.findMany();
  const bird_breeds = await prisma.bird_breeds.findMany();

  const firearms_brands = await prisma.firearms_brands.findMany();

  const automobile_brands = await prisma.automobile_brands.findMany();
  const motorcycle_brands = await prisma.motorcycle_brands.findMany();

  const technology_brands = await prisma.technology_brands.findMany();
  const token_brands = await prisma.token_brands.findMany();
  const coin_brands = await prisma.coin_brands.findMany();

  // const jewleryBrands = brands.map(brands, brands.jewlery);

  const jewelry = jewelry_brands.map((object) => object.jewelry_brands);
  const watch = watch_brands.map((object) => object.watch_brands);
  const leather = leather_brands.map((object) => object.leather_brands);

  const dog = dog_breeds.map((object) => object.dog_breeds);
  const cat = cat_breeds.map((object) => object.cat_breeds);
  const bird = bird_breeds.map((object) => object.bird_breeds);

  const firearms = firearms_brands.map((object) => object.firearms_brands);

  const automobile = automobile_brands.map(
    (object) => object.automobile_brands
  );
  const motorcycle = motorcycle_brands.map(
    (object) => object.motorcycle_brands
  );

  const technology = technology_brands.map(
    (object) => object.technology_brands
  );
  const token = token_brands.map((object) => object.token_brands);
  const coin = coin_brands.map((object) => object.coin_brands);
  const masterBrandObject = [
    {
      name: "jewlery",
      brands: jewelry,
      subcategories: [
        "bracelet",
        "brooch",
        "charm",
        "cufflinks",
        "earrings",
        "engagement ",
        "ring",
        "high jewelry",
        "necklace",
        "pendant",
        "ring	",
        "wedding band",
        "other jewelry",
      ],
    },
    {
      name: "watch",
      brands: watch,
      subcategories: [null],
    },
    {
      name: "art",
      brands: null,
      subcategories: [
        "bowl",
        "table ",
        "art",
        "painting",
        "sculpture",
        "vase",
        "other art",
      ],
    },
    {
      name: "leather",
      brands: leather,
      subcategories: [
        "briefcase",
        "evening bag",
        "exotic",
        "handbag",
        "made to order",
        "purse",
        "shoulder bag",
        "tote",
        "travel bag",
        "trunk",
        "other leather goods",
      ],
    },
    {
      name: "dog",
      breeds: dog,
      subcategories: [],
    },
    {
      name: "cat",
      breeds: cat,
      subcategories: [],
    },
    {
      name: "bird",
      breeds: bird,
      subcategories: [],
    },
    {
      name: "firearms",
      brands: firearms,
      subcategories: [
        "assault rifle ",
        "machine gun",
        "revolver	",
        "rifle/carbine",
        "pistol",
        "shotgun	",
        "sub-machine-gun",
        "other gun",
      ],
    },
    {
      name: "automobile",
      brands: automobile,
      subcategories: [],
    },
    {
      name: "motorcycle",
      brands: motorcycle,
      subcategories: [],
    },
    {
      name: "technology",
      brands: technology,
      subcategories: [
        "camera",
        "cell phone",
        "computer",
        "drone",
        "earphone",
        "tablet",
        "watch",
        "other",
        "technology",
      ],
    },
    {
      name: "token",
      brands: token,
      subcategories: [
        "nft digital artwork",
        "nft game asset",
        "nft music",
        "nft video",
        "other nft",
      ],
    },
    {
      name: "coin",
      brands: coin,
      subcategories: [],
    },
    {
      name: "clothing",
      brands: null,
      subcategories: [],
    },
    {
      name: "sneakers",
      brands: null,
      subcategories: [],
    },
    {
      name: "trading cards",
      brands: null,
      subcategories: [],
    },
  ];
  return json(masterBrandObject);
  // console.log(jewleryBrands);
};
