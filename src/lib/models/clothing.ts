import {mongoose } from mongoose; 
const clothingSchema= new mongoose.Schema({
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    material: { type: String, required: true, default: "" },
    size: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    engraving: { type: String, required: true, default: "" },
    uniqueFeatures: { type: String, required: true, default: "" },
  });
  
   const ClothingCard = mongoose.model("ClothingCard", clothingSchema);
  