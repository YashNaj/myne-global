import mongoose from 'mongoose';
const animalSchema = new mongoose.Schema({
    subCategory: { type: String, default: "", required: true },
    breed: { type: String, default: "", required: true },
    color: { type: String, default: "", required: true },
    microchip: { type: String, default: "", required: true },
    tattoo: { type: String, default: "", required: true },
    height: { type: String, default: "", required: true },
    bodyLength: { type: String, default: "", required: true },
    weight: { type: String, default: "", required: true },
    pedigree: { type: String, default: "", required: true },
    dob:   { type: Date, default: "", required: true}
    purchasedFrom: { type: String, default: "", required: true },
    purchaseValue: { type: String, default: "", required: true },
    description: { type: String, default: "", required: true },
    otherFeatures: { type: String, default: "", required: true },
    registrationCertificate:{type: String, default: "", required: true }
    });
    
const AnimalCard = mongoose.model('AnimalCard', animalSchema);    