import {
  template,
  generalFieldsBack,
  jewelryFields,
  watchFields,
  artFields,
  leatherFields,
  clothingFields,
  sneakerFields,
  gunsFields,
  technologyFields,
  tradingCardFields,
  colectibleFields,
  cryptoFields,
  nftFields,
  vintageFields,
  autoFields,
  motoFields,
  catFields,
  dogFields,
  birdFields,
  otherFields,
  otherAnimalFields,
  childIdFields,
} from "$lib/utils/forms";
import {
  jewelryProps,
  watchProps,
  artProps,
  leatherProps,
  clothingProps,
  sneakerProps,
  firearmsProps,
  technologyProps,
  tradingCardsProps,
  collectiblesProps,
  cryptoProps,
  nftProps,
  animalProps,
  vintageProps,
  autoProps,
  motoProps,
  otherProps,
} from "$lib/utils/fieldProps";

export interface IcardProps {
  [key: string]: string | boolean | null | bigint | string[];
  category: keyof typeof colors | keyof typeof formFieldsObject | string | null;
}
export interface IfieldsPropsObject {
  [key: string]: string[];
}

export const fieldPropsObject: IfieldsPropsObject = {
  jewelry: jewelryProps,
  watch: watchProps,
  art: artProps,
  leather: leatherProps,
  clothing: clothingProps,
  sneakers: sneakerProps,
  firearms: firearmsProps,
  technology: technologyProps,
  "trading cards": tradingCardsProps,
  collectibles: collectiblesProps,
  crypto: cryptoProps,
  nft: nftProps,
  dog: animalProps,
  cat: animalProps,
  bird: animalProps,
  "other animal": animalProps,
  vintage: vintageProps,
  automobile: autoProps,
  motorcycle: motoProps,
  other: otherProps,
};
export const formFieldsObject = {
  jewelry: jewelryFields,
  watch: watchFields,
  firearms: gunsFields,
  art: artFields,
  leather: leatherFields,
  clothing: clothingFields,
  sneakers: sneakerFields,
  fir: gunsFields,
  technology: technologyFields,
  "trading cards": tradingCardFields,
  collectibles: colectibleFields,
  crypto: cryptoFields,
  nft: nftFields,
  vintage: vintageFields,
  automobile: autoFields,
  motorcycle: motoFields,
  cat: catFields,
  dog: dogFields,
  bird: birdFields,
  "other animal": otherAnimalFields,
  other: otherFields,
  childid: childIdFields,
};

export const colors = {
  jewelry: "bg-gradient-to-r from-[#F192E8] to-[#edd7eb]",
  watch: "bg-gradient-to-r from-[#1b1c1d] to-[#999ba0]",
  art: "bg-gradient-to-r from-[#ffe609] to-[#fffbd7]",
  leather: "bg-gradient-to-r from-[#984E1D] to-[#dbbfad]",
  clothing: "bg-gradient-to-r from-[#456896] to-[#d6e7e8]",
  sneakers: "bg-gradient-to-r from-[#86e8ec] to-[#bbd5d5]",
  firearms: "bg-gradient-to-r to-[#edd49e] via-[#638256] from-[#1d410e]",
  technology: "bg-gradient-to-r from-[#132076]  to-[#c8c5f1]",
  "trading cards": "bg-gradient-to-r from-[#ddcd7c] via-[#ddcd7c]  to-[#e8e5d7]",
  collectibles: "bg-gradient-to-r from-[#6bf7b3]  to-[#c9e8d9]",
  crypto: "bg-gradient-to-r from-[#8d8b8b]  to-[#efefef]",
  nft: "bg-gradient-to-r from-[#582577]  to-[#e3d1ee",
  vintage: "bg-gradient-to-r from-[#FF5F09]  to-[#f8e6de]",
  automobile: "bg-gradient-to-r from-[#ff2800]  to-[#601204]",
  motorcycle: "bg-gradient-to-r from-[#ff2800]  to-[#601204]",
  dog: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
  cat: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
  bird: "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
  "other animal": "bg-gradient-to-r from-[#2e9a00]  to-[#d1ffbb]",
  other: "bg-gradient-to-r from-[#f3efef]  to-[#767976]",
  sneakers: "bg-gradient-to-r from-[#86e8ec] to-[#bbd5d5]",
};

