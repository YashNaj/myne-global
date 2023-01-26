import mongoose , {type Model} from 'mongoose

export interface Card {
    __id: string; 
    __myneId: string; 
    division: string;
    category: string;
    subCategory: string; 
    brand: string; 
    size: string; 
    purchasedFrom: string; 
    purchasedValue: string;
    description: string; 
    date: Date; 
    isStolen: boolean;
    isHeriloom: boolean;
    pictures: [];
}

const modelName = "MyneCardGeneralSchema";

export const MyneCardGeneralSchema: Model<MyneCardGeneralSchema> = mongoose.models[modelName] ||
    mongoose.model( 
        modelName, 
        new mongoose.Schema(
            {     __id: {
                type: string, required:true 
            }
                __myneId: 
                {type: string , required: true, default: ''},
                division: 
                {   type: String, 
                    required: true },
                category: 
                { type: String, required: true },
                subCategory: 
                { type: String, required: true },
                brand: 
                { type: String, required: true },
                size: 
                { type: String, required: true },
                serial: 
                { type: String, required: true },
                purchasedFrom: 
                { type: String, required: true },
                purchaseValue: 
                { type: String, required: true },
                description: 
                { type: String, required: false, default: 'You can add a decription as you please' },
                isStolen: { type: Boolean, required: true, default: false },
                isHeriloom: { type: Boolean, required: true, default: false },
                defualt: {type: ()=> Date.now(), required: true,} ,
                pictures: [] 
            })
       );

