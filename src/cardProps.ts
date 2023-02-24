export interface IcardProps {
  [key: string]: string | boolean | null | bigint;
  category : string | null ;
}
// card external control values
export let expand = false;
export let flipped = false;
export let sentCard = false;
export let success: boolean | null = null;
//card variables
export let category: keyof typeof colors |  keyof typeof formFieldsObject | string | null ='';
export let subcategory: string | undefined = "";
export let brand: string | undefined = "";
export let breed: string | undefined = "";
export let size: string | undefined = "";
export let purchasedFrom: string | undefined = "";
export let purchasedValue: string | number | null  | bigint | undefined= "";
export let reportedStolenDate: string | undefined = "";
export let description: string | undefined = "";
export let crypto_token_address: string | undefined = "";
export let unique_features: string | undefined = "";
export let artist: string | undefined = "";
export let author: string | undefined = "";
export let dob: string | undefined = "";
export let body_length: string | undefined = "";
export let brand_reference: string | undefined = "";
export let caliber: string | undefined = "";
export let carat_weight: string | undefined = "";
export let case_material: string | undefined = "";
export let cOfAuth: string | undefined = "";
export let clarity: string | undefined = "";
export let color: string | undefined = "";
export let cut_shape: string | undefined = "";
export let date: string | undefined = "";
export let dial: string | undefined = "";
export let distinguishing_features: string | undefined = "";
export let document_array: string | undefined |string[] = "";
export let drivetrain: string | undefined = "";
export let engine: string | undefined = "";
export let engraving: string | undefined = "";
export let exchange_address: string | undefined = "";
export let exterior_color: string | undefined = "";
export let fuel_type: string | undefined = "";
export let grading: string | undefined = "";
export let grading_reports: string | undefined = "";
export let height: string | undefined = "";
export let hotstamping: string | undefined = "";
export let interior_color: string | undefined = "";
export let invoice: string | undefined = "";
export let laser_inscription: string | undefined = "";
export let manufacturer: string | undefined = "";
export let material: string | undefined = "";
export let microchip: string | undefined = "";
export let mileage: string | undefined = "";
export let model: string | undefined = "";
export let model_yr : string | undefined= "";
export let movement_caliber: string | undefined = "";
export let other: string | undefined = "";
export let pedigree: string | undefined = "";
export let product: string | undefined = "";
export let registration_certificate: string | undefined = "";
export let release_date: string | undefined = "";
export let serial: string | undefined = "";
export let serie: string | undefined = "";
export let series: string | undefined = "";
export let smart_contract_address: string | undefined = "";
export let smart_contract_id: string | undefined = "";
export let stock_number: string | undefined = "";
export let stone: string | undefined = "";
export let strap_bracelet: string | undefined = "";
export let tattoo : string | undefined= "";
export let trademarks : string | undefined= "";
export let transaction : string | undefined= "";
export let transmission: string | undefined = "";
export let url: string | undefined = "";
export let valuation_report : string | undefined= "";
export let vin : string | undefined= "";
export let wallet : string | undefined= "";
export let weight : string | undefined= "";
export let year: string | undefined = "";
export let pictures: string | undefined = "";
export let marketPrice : string | undefined= "";
export let isStolen: string | undefined = "";
export let isHeirloom : string | undefined= "";
export let wallet_address:string | undefined = ""
export let backgroundColor: string | null | undefined = ''; 
export let cardProps:cardProps = {
  isStolen,
  isHeirloom,
  pictures,
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
  backgroundColor
};

