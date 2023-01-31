import { mongoose } from 'mongoose';
const jewelrySchema = new mongoose.Schema({
  subCategory: { type: String, required: true, default: "" },
  brand: { type: String, required: true, default: "" },
  brandReference: { type: String, required: true, default: "" },
  serial: { type: String, required: true, default: "" },
  model: { type: String, required: true, default: "" },
  material: { type: String, required: true, default: "" },
  size: { type: String, required: true, default: "" },
  stone: { type: String, required: true, default: "" },
  shape: { type: String, required: true, default: "" },
  color: { type: String, required: true, default: "" },
  cut: { type: String, required: true, default: "" },
  clarity: { type: String, required: true, default: "" },
  caratWeight: { type: String, required: true, default: "" },
  laserInscription: { type: String, required: true, default: "" },
  gradingReports: { type: String, required: true, default: "" },
  purchasedFrom: { type: String, required: true, default: "" },
  purchaseValue: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  engraving: { type: String, required: true, default: "" },
  trademarks: { type: String, required: true, default: "" },
  distinguishingFeatures: { type: String, required: true, default: "" },
  certificateOfAuthenticity: { type: String, required: true, default: "" },
  valuationReport: { type: String, required: true, default: "" },
});

const JewelryCard = mongoose.model("JewelryCard", jewelrySchema


