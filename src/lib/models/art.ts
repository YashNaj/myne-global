import mongoose from 'mongoose';
const artSchema = new mongoose.Schema({
    subcategory: {type: string, required: true, default: string} , ,
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    artist: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    material: { type: String, required: true, default: "" },
    size: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    engraving: { type: String, required: true, default: "" },
    trademarks: { type: String, required: true, default: "" },
  });
  
  const ArtCard = mongoose.model("ArtCard", artSchema);