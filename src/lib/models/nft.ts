import mongoose from 'mongoose';
const nftSchema = new mongoose.Schema({
    subCategory: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    smartContractAddress: { type: String, default: '', required: true },
    smartContractId: { type: String, default: '', required: true },
    url: { type: String, default: '', required: true },
    serial: { type: String, default: '', required: true },
    model: { type: String, default: '', required: true },
    purchasedFrom: { type: String, default: '', required: true },
    purchaseValue: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    engraving: { type: String, default: '', required: true },
    uniqueFeatures: { type: String, default: '', required: true },
    });

const NFTCard = mongoose.model('NFTCard', nftSchema);