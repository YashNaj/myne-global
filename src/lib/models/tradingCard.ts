import mongoose from 'mongoose';
const tradingCardSchema = new mongoose.Schema({
    subCategory: { type: String, required: true, default: "" },
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    grading: { type: String, required: true, default: "" },
    manufacturer: { type: String, required: true, default: "" },
    product: { type: String, required: true, default: "" },
    series: { type: String, required: true, default: "" },
    releaseDate: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    uniqueFeatures: { type: String, required: true, default: "" },

  });
  const TradingCard = mongoose.model("TradingCard", tradingCardSchema);
