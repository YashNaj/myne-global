import mongoose from 'mongoose';
const otherSchema = new mongoose.Schema({
    brand: { type: String, default: "", required: true },
    brandReference: { type: String, default: "", required: true },
    serial: { type: String, default: "", required: true },
    model: { type: String, default: "", required: true },
    material: { type: String, default: "", required: true },
    size: { type: String, default: "", required: true },
    other: { type: String, default: "", required: true },
    purchasedFrom: { type: String, default: "", required: true },
    purchaseValue: { type: String, default: "", required: true },
    description: { type: String, default: "", required: true },
    otherFeatures: { type: String, default: "", required: true },
    });
    const OtherCard = mongoose.model('OtherCard', otherSchema);