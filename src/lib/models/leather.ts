import { mongoose } from "mongoose";
const leatherSchema = new mongoose.Schema({
  subcategory:{type:String, required: true, default: ""} ,
  brand: { type: String, required: true, default: "" },
  brandReference: { type: String, required: true, default: "" },
  serial: { type: String, required: true, default: "" },
  model: { type: String, required: true, default: "" },
  material: { type: String, required: true, default: "" },
  size: { type: String, required: true, default: "" },
  purchasedFrom: { type: String, required: true, default: "" },
  purchaseValue: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  hotStamp: { type: String, required: true, default: "" },
  uniqueFeatures: { type: String, required: true, default: "" },
});

const LeatherCard = mongoose.model("LeatherCard", leatherSchema);
