let template = {
  fieldsFront: [
    {
      label: "",
      location: "",
      value: "",
      justify: "",
    },
  ],
  fieldsBackOne: [
    {
      label: "",
      location: "",
      value: "",
      justify: "",
    },
  ],
  fieldsBackTwo: [
    {
      label: "",
      location: "",
      value: "",
      justify: "",
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
let cut = "";
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
let wallet = "";
let weight = "";
let year = "";
let marketPrice = "";
export let generalFields = {
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
      value: brand,
      justify: "justify-start",
    },
    {
      label: "Reference",
      location: "middle_right",
      value: brand_reference,
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: model,
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: serial,
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "",
      location: "back_1",
      value: case_material,
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
};
export let generalFieldsBack = [
  {
    label: "Purchased From",
    location: "general_1",
    value: purchasedFrom,
    justify: "justify-start",
  },
  {
    label: "Purchase Value",
    location: "general_2",
    value: purchasedValue,
    justify: "justify-end",
  },
  {
    label: "Market Price",
    location: "general_3",
    value: marketPrice,
    justify: "justify-start",
  },
  {
    label: "Pictures",
    location: "general_3",
    value: marketPrice,
    justify: "justify-end",
  },
];

export let jewelryFields = {
  fieldsFront: [
    {
      label: "Category",
      location: "top_left",
      value: category,
      justify: "justify-start",
    },
    {
      label: "Subcategory",
      location: "top_right",
      value: subcategory,
      justify: "justify-end",
    },
    {
      label: "Brand",
      location: "middle_left",
      value: brand,
      justify: "justify-start",
    },
    {
      label: "Brand Reference",
      location: "middle_right",
      value: brand_reference,
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: model,
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: serial,
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Material",
      location: "back_1",
      value: material,
      justify: "justify-start",
    },
    {
      label: "Stone",
      location: "back_2",
      value: stone,
      justify: "justify-end",
    },
    {
      label: "Carat/Weight",
      location: "back_3",
      value: carat_weight,
      justify: "justify-start",
    },
    {
      label: "Cut/Shape",
      location: "back_4",
      value: cut,
      justify: "justify-end",
    },
    {
      label: "Color",
      location: "back_5",
      value: color,
      justify: "justify-start",
    },
    {
      label: "Clarity",
      location: "back_6",
      value: clarity,
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [
    {
      label: "Size",
      location: "back_7",
      value: size,
      justify: "justify-start",
    },
    {
      label: "Laser Marking",
      location: "back_8",
      value: laser_inscription,
      justify: "justify-end",
    },
    {
      label: "Engraving",
      location: "back_9",
      value: engraving,
      justify: "justify-start",
    },
    {
      label: "Trademarks",
      location: "back_10",
      value: trademarks,
      justify: "justify-end",
    },
    {
      label: "Grading Report",
      location: "DOCUMENT",
      value: grading_reports,
      justify: "hidden",
    },
  ],
};

export let watchFields = {
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
      value: brand,
      justify: "justify-start",
    },
    {
      label: "Reference",
      location: "middle_right",
      value: brand_reference,
      justify: "justify-end",
    },
    {
      label: "Model",
      location: "bottom_left",
      value: model,
      justify: "justify-start",
    },
    {
      label: "Serial",
      location: "bottom_right",
      value: serial,
      justify: "justify-end",
    },
  ],
  fieldsBackOne: [
    {
      label: "Case Material",
      location: "back_1",
      value: case_material,
      justify: "justify-start",
    },
    {
      label: "Size",
      location: "back_2",
      value: size,
      justify: "justify-end",
    },
    {
      label: "Movement/Caliber",
      location: "back_3",
      value: movement_caliber,
      justify: "justify-start",
    },
    {
      label: "Dial",
      location: "back_4",
      value: dial,
      justify: "justify-end",
    },
    {
      label: "Strap/Bracelet",
      location: "back_5",
      value: strap_bracelet,
      justify: "justify-start",
    },
    {
      label: "Engraving",
      location: "back_6",
      value: engraving,
      justify: "justify-end",
    },
  ],
  fieldsBackTwo: [

    {
      label: "Other Unique Features",
      location: "back_1",
      value: other,
      justify: "justify-start",
    },
    {
      label: "Grading ",
      location: "back_2",
      value: grading_reports,
      justify: "justify-end",
    },
    {
      label: "Valuation Report",
      location: "back_3",
      value: valuation_report,
      justify: "justify-start",
    },

  ],
};
