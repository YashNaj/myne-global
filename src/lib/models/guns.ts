import mongoose from 'mongoose';
const gunSchema = new mongoose.Schema({
    subCategory: { type: String, required: true, default: "" },
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    caseMaterial: { type: String, required: true, default: "" },
    size: { type: String, required: true, default: "" },
    caliber: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    engraving: { type: String, required: true, default: "" },
    uniqueFeatures: { type: String, required: true, default: "" },
  });
  const GunCard = mongoose.model("GunCard", gunSchema);
