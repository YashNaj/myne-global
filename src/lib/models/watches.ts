import mongoose , {type Model } from 'mongoose'; 
export interface Watches { 
    brand: string;
    referenceNUmber: string;
    serialk: string; 
    movement: string;
    caseDiameter: string;
    waterResistance: string;
    dial: string; 
    material: string;
    strap: string;
    uniqueMarks: [string];
    engraving: string;
    msrp: string; 
    purchasedFrom: string;
    purchaseValue: string; 
    uniqueMarks: [string];
    engraving: string;
    description: [string]; 
}
const modelName = 'Watches'
export const Watches: Model<Watches> = mongoose.models[modelName] ||
    mongoose.model(
        modelName,
        new mongoose.Schema({
            brand: {
                type: String
                required : true,
                default: ''
            },
            brandReference: {
                type: String
                required : true,
                default: ''
            },            
            serial: {
                type: String
                required : true,
                default: ''
            },
            movement: {
                type: String
                required : true,
                default: ''
            },
            caseDiameter: {
                type: String
                required : true,
                default: ''
            },
            waterResistance: {
                type: String
                required : true,
                default: ''
            },
            dial: {
                type: String
                required : true,
                default: ''
            },
            material: {
                type: String
                required : true,
                default: ''
            },
            strap: {
                type: String
                required : true,
                default: ''
            },
            uniqueMarks: {
                type: String
                required : true,
                default: ''
            },
            engraving: {
                type: String
                required : true,
                default: ''
            },
            purchasedFrom: { type: String, required: true, default: "" },
            purchaseValue: { type: String, required: true, default: "" },
            description: { type: String, required: true, default: "" },
            engraving: { type: String, required: true, default: "" },   
            reciepts: { type: [String], required: true, default: "" },
            date: {type: Date()}
        }),
        modelName
    );

