import mongoose , {type Model } from 'mongoose'; 
export interface Watches { 
    brand: string;
    reference_number: string;
    serial_number: string; 
    movement: string;
    case_diameter: string;
    water_resistance: string;
    dial: string; 
    material: string;
    strap: string;
    uniqueMarks: [string];
    engraving: string;
    msrp: string; 
}
const modelName = 'Watches'
export const Watches: Model<Watches> = mongoose.models[modelName] ||
    mongoose.model(
        modelName,
        new mongoose.Schema({
            brand: {
                type: String,
                required: true
            },
            reference_number: {
                type: String
            },            
            serial_number: {
                type: String
            },
            movement: {
                type: String
            },
            case_diameter: {
                type: String
            },
            water_resistance: {
                type: String
            },
            dial: {
                type: String
            },
            material: {
                type: String
            },
            strap: {
                type: String
            },
            uniqueMarks: {
                type: String
            },
            engraving: {
                type: String
            },
            msrp: {
                type: String
            }
        }),
        modelName
    );

