import {mongoose} from 'mongoose';
const motorVehicleSchema = new mongoose.Schema({
    subCategory: { type: String, default: "",required: true },
    brand: { type: String, default: "",required: true },
    brandReference: { type: String, default: "",required: true },
    vin: { type: String, default: "",required: true },
    model: { type: String, default: "",required: true },
    moderlYear: { type: String, default: "",required: true },
    mileage: { type: String, default: "",required: true },
    exteriorColor: { type: String, default: "",required: true },
    interiorColor: { type: String, default: "",required: true },
    drivetrain: { type: String, default: "",required: true },
    fuelType: { type: String, default: "",required: true },
    transmission: { type: String, default: "",required: true },
    engine: { type: String, default: "",required: true },
    stockNumber: { type: String, default: "",required: true },
    size: { type: String, default: "",required: true },
    purchasedFrom: { type: String, default: "",required: true },
    purchaseValue: { type: String, default: "",required: true },
    description: { type: String, default: "",required: true },
    otherFeatures: { type: String, default: "",required: true },
    });

const MotorVehicleCard = mongoose.model('MotorVehicleCard', motorVehicleSchema);