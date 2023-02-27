import { cardProps, type IcardProps } from './cardProps';
export type fieldValues = {
  label: string, 
  location: string,
  value: keyof typeof cardProps
}
export let template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: "",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "",
      location: "back_1",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_2",
      value: "",
      justify: "justify-end",
    },
    {
      label: "",
      location: "back_3",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: "",
      location: "back_5",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_6",
      value: "",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: " ",
      location: "back_1",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_2",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_3",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_5",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_6",
      value: "",
      justify: "justify-end",
    },
  ],
  fieldsBackThree: [
    {
      label: " ",
      location: "back_1",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_2",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_3",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_5",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_6",
      value: "",
      justify: "justify-end",
    },
  ],
};
//card variables
let isStolen = "";
let isHeirloom = "";
let pictures = "";
let category = "";
let subcategory = "";
let brand = "";
let breed = "";
let size = "";
let purchasedFrom = "";
let purchasedValue = "";
let reportedStolenDate = "";
let description = "";
let crypto_token_address = "";
let unique_features = "";
let artist = "";
let author = "";
let dob = "";
let body_length = "";
let brand_reference = "";
let caliber = "";
let carat_weight = "";
let case_material = "";
let cOfAuth = "";
let clarity = "";
let color = "";
let cut_shape = "";
let date = "";
let dial = "";
let distinguishing_features = "";
let document = "";
let drivetrain = "";
let engine = "";
let engraving = "";
let exchange_address = "";
let exterior_color = "";
let fuel_type = "";
let grading = "";
let grading_reports = "";
let height = "";
let hotstamping = "";
let interior_color = "";
let invoice = "";
let laser_inscription = "";
let manufacturer = "";
let material = "";
let microchip = "";
let mileage = "";
let model = "";
let model_yr = "";
let movement_caliber = "";
let other = "";
let pedigree = "";
let product = "";
let registration_certificate = "";
let release_date = "";
let serial = "";
let serie = "";
let series = "";
let shape = "";
let smart_contract_address = "";
let smart_contract_id = "";
let stock_number = "";
let stone = "";
let strap_bracelet = "";
let tattoo = "";
let trademarks = "";
let transaction = "";
let transmission = "";
let url = "";
let valuation_report = "";
let vin = "";
let wallet_address = "";
let weight = "";
let year = "";
let marketPrice = "";
let childIdFirstName = "";
let childIdMiddleName = "";
let childIdLastName = "";
let eye_color = "";
let hair_color = "";
let parentOneName = "";
let parentTwoName = "";
let contactNumberOne = "";
let contactNumberTwo = "";
let homeAddress = "";
let homeCity = " ";
let homeState = "";
let homeCountry = "";
let homeZIP = "";
let age = "";
let gender = "";
let race = "";
let physicalTraits = "";
let allergies = "";
let medicalConditions = "";
let prescription = "";
let blood_type = "";

export let generalFields: typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: "serial",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "",
      location: "back_1",
      value: "case_material",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_2",
      value: "",
      justify: "justify-end",
    },
    {
      label: "",
      location: "back_3",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: "",
      location: "back_5",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_6",
      value: "",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "DOCUMENT",
      value: "",
      justify: "justify-end",
    },
  ],
  fieldsBackThree: [
    {
      label: " ",
      location: "back_1",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_2",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_3",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: " ",
      location: "back_5",
      value: "",
      justify: "justify-start",
    },
    {
      label: " ",
      location: "back_6",
      value: "",
      justify: "justify-end",
    },
  ],
};
export let generalFieldsBack = [
  {
    label: "Purchased From",
    location: "general_1",
    value: "purchasedFrom",
    justify: "justify-start",
  },
  {
    label: "Purchase Value",
    location: "general_2",
    value: "purchasedValue",
    justify: "justify-end",
  },
  {
    label: "Market Price",
    location: "general_3",
    value: "marketPrice",
    justify: "justify-start",
  },
  {
    label: "Pictures",
    location: "general_3",
    value: "pictures",
    justify: "justify-end",
  },
];

export let jewelryFields: typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: "serial",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Material",
      location: "back_1",
      value: "material",
      justify: "justify-start",
    },
    {
      label: "Stone",
      location: "back_2",
      value: "stone",
      justify: "justify-end",
    },
    {
      label: "Carat/Weight",
      location: "back_3",
      value: "carat_weight",
      justify: "justify-start",
    },
    {
      label: "Cut/Shape",
      location: "back_4",
      value: "cut_shape",
      justify: "justify-end",
    },
    {
      label: "Color",
      location: "back_5",
      value: "color",
      justify: "justify-start",
    },
    {
      label: "Clarity",
      location: "back_6",
      value: "clarity",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Size",
      location: "back_7",
      value: "size",
      justify: "justify-start",
    },
    {
      label: "Laser Marking",
      location: "back_8",
      value: "laser_inscription",
      justify: "justify-end",
    },
    {
      label: "Engraving",
      location: "back_9",
      value: "engraving",
      justify: "justify-start",
    },
    {
      label: "Trademarks",
      location: "back_10",
      value: "trademarks",
      justify: "justify-end",
    },
    {
      label: "Grading Report",
      location: "DOCUMENT",
      value: "grading_reports",
      justify: "hidden",
    },
  ],
  fieldsBackThree: [''],
};

export let watchFields: typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_right",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: "serial",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Case Material",
      location: "back_1",
      value: "case_material",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_2",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Movement/Caliber",
      location: "back_3",
      value: "movement_caliber",
      justify: "justify-start",
    },
    {
      label: "Dial",
      location: "back_4",
      value: "dial",
      justify: "justify-end",
    },
    {
      label: "Strap/Bracelet",
      location: "back_5",
      value: "strap_bracelet",
      justify: "justify-start",
    },
    {
      label: "Engraving",
      location: "back_6",
      value: "engraving",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Unique features",
      location: "back_1",
      value: "other",
      justify: "justify-start",
    },
    {
      label: "Grading ",
      location: "back_2",
      value: "grading_reports",
      justify: "justify-end",
    },
    {
      label: "Valuation Report",
      location: "back_3",
      value: "valuation_report",
      justify: "justify-start",
    },
  ],
  fieldsBackThree: [''],
};
export let artFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Artist",
      location: "middle_left",
      value: "artist",
      justify: "justify-start",
    },
    {
      label: "Model",
      location: "middle_right",
      value: "model",
      justify: "justify-end",
    },
    {
      label: "Material",
      location: "bottom_left",
      value: "material",
      justify: "justify-start",
    },
    {
      label: "Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Brand",
      location: "back_1",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "back_2",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Serial",
      location: "back_3",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_5",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Engraving",
      location: "back_6",
      value: "engraving",
      justify: "justify-start",
    },
    {
      label: "Trademark",
      location: "back_4",
      value: "trademarks",
      justify: "justify-end",
    },

  ],
  fieldsBackTwo: [
    {
      label: "Unique features ",
      location: "back_1",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackThree: [],
};
export let leatherFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Material",
      location: "bottom_right",
      value: "material",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_2",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Hotstamping",
      location: "back_3",
      value: "hotstamping",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_4",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackThree: [''],
};
export let clothingFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "bottom_right",
      value: "size",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Material",
      location: "back_2",
      value: "material",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_3",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let sneakerFields:typeof template= {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "bottom_right",
      value: "size",
      justify: "justify-end",
    },
  ],

  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Material",
      location: "back_2",
      value: "material",
      justify: "justify-end",
    },
    {
      label: "Serie",
      location: "back_3",
      value: "serie",
      justify: "justify-start",
    },
    {
      label: "Release Date",
      location: "back_4",
      value: "release_date",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [''],
  fieldsBackThree: [''],
};
export let gunsFields:typeof template= {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Caliber",
      location: "bottom_right",
      value: "caliber",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Case Material",
      location: "back_2",
      value: "case_material",
      justify: "justify-end",
    },
    {
      label: "Size",
      location: "back_3",
      value: "size",
      justify: "justify-start",
    },
    {
      label: "Engraving",
      location: "back_4",
      value: "engraving",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
};
export let technologyFields :typeof template= {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Case Material",
      location: "back_2",
      value: "case_material",
      justify: "justify-end",
    },
    {
      label: "Size",
      location: "back_3",
      value: "size",
      justify: "justify-start",
    },
    {
      label: "Engraving",
      location: "back_4",
      value: "engraving",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
};
export let tradingCardFields :typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Grading",
      location: "bottom_right",
      value: "grading",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Manufacturer",
      location: "back_2",
      value: "manufacturer",
      justify: "justify-end",
    },
    {
      label: "Product",
      location: "back_3",
      value: "product",
      justify: "justify-start",
    },
    {
      label: "Series",
      location: "back_4",
      value: "series",
      justify: "justify-end",
    },
    {
      label: "Release Date",
      location: "back_5",
      value: "release_date",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let colectibleFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Product",
      location: "top_right",
      value: "product",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Release Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-start",
    },
    {
      label: "Grading",
      location: "back_2",
      value: "grading",
      justify: "justify-end",
    },
    {
      label: "Manufacturer",
      location: "back_3",
      value: "manufacturer",
      justify: "justify-start",
    },
    {
      label: "Series",
      location: "back_4",
      value: "series",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let cryptoFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
  ],
  fieldsBackOne: [
    {
      label: "Exchange Address",
      location: "back_4",
      value: "exchange_address",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "back_1",
      value: "serial",
      justify: "justify-end",
    },
    {
      label: "Transaction ID",
      location: "back_3",
      value: "transaction",
      justify: "justify-start",
    },
    {
      label: "Address",
      location: "back_2",
      value: "crypto_token_address",
      justify: "justify-end",
    },
    {
      label: "Wallet Address",
      location: "back_5",
      value: "wallet_address",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let nftFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: "subcategory",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Author",
      location: "middle_right",
      value: "author",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
  ],
  fieldsBackOne: [
    {
      label: "Smart Contract Address",
      location: "back_1",
      value: "smart_contract_address",
      justify: "justify-start",
    },
    {
      label: "URL",
      location: "back_3",
      value: "url",
      justify: "justify-end",
    },
    {
      label: "Smart Contract ID",
      location: "back_2",
      value: "smart_contract_id",
      justify: "justify-start",
    },

    {
      label: "Serial",
      location: "back_4",
      value: "serial",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let vintageFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_left",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Artist",
      location: "back_1",
      value: "artist",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "back_2",
      value: "serial",
      justify: "justify-end",
    },
    {
      label: "Material",
      location: "back_3",
      value: "material",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_4",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Engraving",
      location: "back_5",
      value: "engraving",
      justify: "justify-start",
    },
    {
      label: "Trademarks",
      location: "back_6",
      value: "trademarks",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [''],
  fieldsBackThree: [''],
};
export let autoFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_right",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "VIN",
      location: "back_1",
      value: "vin",
      justify: "justify-start",
    },
    {
      label: "Mileage",
      location: "back_2",
      value: "mileage",
      justify: "justify-end",
    },
    {
      label: "Drivetrain",
      location: "back_3",
      value: "drivetrain",
      justify: "justify-start",
    },
    {
      label: "Fuel Type",
      location: "back_4",
      value: "fuel_type",
      justify: "justify-end",
    },
    {
      label: "Transmission",
      location: "back_5",
      value: "transmission",
      justify: "justify-start",
    },
    {
      label: "Engine",
      location: "back_6",
      value: "engine",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Exterior Color",
      location: "back_1",
      value: "exterior_color",
      justify: "justify-start",
    },
    {
      label: "Interior Color",
      location: "back_2",
      value: "interior_color",
      justify: "justify-end",
    },
    {
      label: "Stock Number",
      location: "back_3",
      value: "stock_number",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_4",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackThree: [''],
};
export let motoFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_right",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Year",
      location: "bottom_right",
      value: "year",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "VIN",
      location: "back_1",
      value: "vin",
      justify: "justify-start",
    },
    {
      label: "Mileage",
      location: "back_2",
      value: "mileage",
      justify: "justify-end",
    },
    {
      label: "Drivetrain",
      location: "back_3",
      value: "drivetrain",
      justify: "justify-start",
    },
    {
      label: "Fuel Type",
      location: "back_4",
      value: "fuel_type",
      justify: "justify-end",
    },
    {
      label: "Transmission",
      location: "back_5",
      value: "transmission",
      justify: "justify-start",
    },
    {
      label: "Engine",
      location: "back_6",
      value: "engine",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Color",
      location: "back_1",
      value: "exterior_color",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_4",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Stock Number",
      location: "back_3",
      value: "stock_number",
      justify: "justify-start",
    },
    {
      label: "",
      location: "back_4",
      value: "",
      justify: "justify-end",
    },
    {
      label: "Unique features",
      location: "back_5",
      value: "other",
      justify: "justify-start",
    },
  ],
  fieldsBackThree: [],
};
export let otherFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "",
      location: "top_left",
      value: "",
      justify: "justify-start",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: "brand",
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: "brand_reference",
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: "model",
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: "serial",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Material",
      location: "back_1",
      value: "material",
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_2",
      value: "size",
      justify: "justify-end",
    },
    {
      label: "Other",
      location: "back_3",
      value: "other",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_4",
      value: "unique_features",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let dogFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Date of Birth",
      location: "top_right",
      value: "dob",
      justify: "justify-end",
    },
    {
      label: "Breed",
      location: "middle_left",
      value: "breed",
      justify: "justify-start",
    },
    {
      label: "Color",
      location: "middle_right",
      value: "color",
      justify: "justify-end",
    },
    {
      label: "Body Length",
      location: "bottom_left",
      value: "body_length",
      justify: "justify-start",
    },
    {
      label: "Weight",
      location: "bottom_right",
      value: "weight",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Microchip",
      location: "back_1",
      value: "microchip",
      justify: "justify-start",
    },
    {
      label: "Tattoo",
      location: "back_2",
      value: "tattoo",
      justify: "justify-end",
    },
    {
      label: "Height",
      location: "back_3",
      value: "height",
      justify: "justify-start",
    },
    {
      label: "Gender",
      location: "back_4",
      value: "gender",
      justify: "justify-end",
    },
    {
      label: "Pedigree",
      location: "back_5",
      value: "pedigree",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_6",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let catFields:typeof templates = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Date of Birth",
      location: "top_right",
      value: "dob",
      justify: "justify-end",
    },
    {
      label: "Breed",
      location: "middle_left",
      value: "breed",
      justify: "justify-start",
    },
    {
      label: "Color",
      location: "middle_right",
      value: "color",
      justify: "justify-end",
    },
    {
      label: "Body Length",
      location: "bottom_left",
      value: "body_length",
      justify: "justify-start",
    },
    {
      label: "Weight",
      location: "bottom_right",
      value: "weight",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Microchip",
      location: "back_1",
      value: "microchip",
      justify: "justify-start",
    },
    {
      label: "Tattoo",
      location: "back_2",
      value: "tattoo",
      justify: "justify-end",
    },
    {
      label: "Height",
      location: "back_3",
      value: "height",
      justify: "justify-start",
    },
    {
      label: "Gender",
      location: "back_4",
      value: "gender",
      justify: "justify-end",
    },
    {
      label: "Pedigree",
      location: "back_5",
      value: "pedigree",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_6",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let birdFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Date of Birth",
      location: "top_right",
      value: "dob",
      justify: "justify-end",
    },
    {
      label: "Breed",
      location: "middle_left",
      value: "breed",
      justify: "justify-start",
    },
    {
      label: "Color",
      location: "middle_right",
      value: "color",
      justify: "justify-end",
    },
    {
      label: "Body Length",
      location: "bottom_left",
      value: "body_length",
      justify: "justify-start",
    },
    {
      label: "Weight",
      location: "bottom_right",
      value: "weight",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Microchip",
      location: "back_1",
      value: "microchip",
      justify: "justify-start",
    },
    {
      label: "Tattoo",
      location: "back_2",
      value: "tattoo",
      justify: "justify-end",
    },
    {
      label: "Height",
      location: "back_5",
      value: "height",
      justify: "justify-start",
    },
    {
      label: "Gender",
      location: "back_3",
      value: "gender",
      justify: "justify-end",
    },
    {
      label: "Pedigree",
      location: "back_5",
      value: "pedigree",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_6",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};
export let childIdFields = {
  fieldsFront: [
    {
      label: "First Name",
      location: "top_left",
      value: "childIdFirstName",
      justify: "justify-start",
    },
    {
      label: "Middle Name",
      location: "top_right",
      value: "childIdMiddleName",
      justify: "justify-end",
    },
    {
      label: "Last Name",
      location: "middle_left",
      value: "childIdLastName",
      justify: "justify-start",
    },
    {
      label: "Eye Color",
      location: "middle_right",
      value: "eye_color",
      justify: "justify-end",
    },
    {
      label: "Hair Color",
      location: "bottom_left",
      value: "hair_color",
      justify: "justify-start",
    },
    {
      label: "Height",
      location: "bottom_right",
      value: "height",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Parent 1 Name",
      location: "back_1",
      value: "parentOneName",
      justify: "justify-start",
    },
    {
      label: "Parent 2 Name",
      location: "back_2",
      value: "parentTwoName",
      justify: "justify-end",
    },
    {
      label: "Phone 1",
      location: "back_3",
      value: "contactNumberOne",
      justify: "justify-start",
    },
    {
      label: "Phone 2",
      location: "back_4",
      value: "contactNumberTwo",
      justify: "justify-end",
    },
    {
      label: "Date of Birth",
      location: "back_6",
      value: "dob",
      justify: "justify-start",
    },
    {
      label: "Blood Type",
      location: "back_1",
      value: "blood_type",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Weight",
      location: "back_1",
      value: "weight",
      justify: "justify-start",
    },
    {
      label: "Gender",
      location: "back_2",
      value: "gender",
      justify: "justify-end",
    },
    {
      label: "Race",
      location: "back_3",
      value: "race",
      justify: "justify-start",
    },
    {
      label: "Physical Traits",
      location: "back_4",
      value: "physicalTraits",
      justify: "justify-end",
    },
    {
      label: "Allergy",
      location: "back_5",
      value: "allergies",
      justify: "justify-start",
    },
    {
      label: "Medical Conditions",
      location: "back_6",
      value: "medicalConditions",
      justify: "justify-end",
    },
  ],
  fieldsBackThree: [
    {
      label: "Home Address",
      location: "back_1",
      value: "homeAddress",
      justify: "justify-start",
    },
    {
      label: "Home City",
      location: "back_2",
      value: "homeCity",
      justify: "justify-end",
    },
    {
      label: "Home State",
      location: "back_3",
      value: "homeState",
      justify: "justify-start",
    },
    {
      label: "Home ZIP",
      location: "back_4",
      value: "homeZIP",
    },
    {
      label: "Home Country",
      location: "back_5",
      value: "homeCountry",
      justify: "justify-start",
    },
  ],
};
export let otherAnimalFields:typeof template = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: "category",
      justify: "justify-start",
    },
    {
      label: "Date of Birth",
      location: "top_right",
      value: "dob",
      justify: "justify-end",
    },
    {
      label: "Breed",
      location: "middle_left",
      value: "breed",
      justify: "justify-start",
    },
    {
      label: "Color",
      location: "middle_right",
      value: "color",
      justify: "justify-end",
    },
    {
      label: "Body Length",
      location: "bottom_left",
      value: "body_length",
      justify: "justify-start",
    },
    {
      label: "Weight",
      location: "bottom_right",
      value: "weight",
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Microchip",
      location: "back_1",
      value: "microchip",
      justify: "justify-start",
    },
    {
      label: "Tattoo",
      location: "back_2",
      value: "tattoo",
      justify: "justify-end",
    },
    {
      label: "Height",
      location: "back_3",
      value: "height",
      justify: "justify-start",
    },
    {
      label: "Gender",
      location: "back_4",
      value: "gender",
      justify: "justify-end",
    },
    {
      label: "Pedigree",
      location: "back_5",
      value: "pedigree",
      justify: "justify-start",
    },
    {
      label: "Unique features",
      location: "back_6",
      value: "other",
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [],
  fieldsBackThree: [],
};