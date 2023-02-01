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
    
const AnimalCard = mongoose.model('AnimalCard', animalSchema);    import mongoost from 'mongoose';
const childIdSchema = new mongoose.Schema({
    firstName: { type: String, default: "", required: true  },
    middleName: { type: String, default: "", required: true  },
    lastName: { type: String, default: "", required: true  },
    parent1Name: { type: String, default: "", required: true  },
    parent2Name: { type: String, default: "", required: true  },
    contactNumber1: { type: String, default: "", required: true  },
    contactNumber2: { type: String, default: "", required: true  },
    homeAddress: { type: String, default: "", required: true  },
    homeCity: { type: String, default: "", required: true  },
    homeState: { type: String, default: "", required: true  },
    homeZip: { type: String, default: "", required: true  },
    homeCountry: { type: String, default: "", required: true  },
    age: { type: String, default: "", required: true  },
    dateOfBirth: { type: String, default: "", required: true  },
    gender: { type: String, default: "", required: true  },
    race: { type: String, default: "", required: true  },
    height: { type: String, default: "", required: true  },
    weight: { type: String, default: "", required: true  },
    hairColor: { type: String, default: "", required: true  },
    eyeColor: { type: String, default: "", required: true  },
    physicalTraits: { type: [String], default: "", required: true  },
    allergy: { type: [String], default: "", required: true  },
    medicalCondition: { type: [String], default: "", required: true  },
    rx: { type: [String], default: "", required: true  },
    description: { type: String, default: "", required: true  },
    otherFeatures: { type: [String], default: "", required: true  },
    });
const ChildIdCard = mongoose.model("ChildIdCard", cardSchema);
    
const cryptoSchema = new mongoose.Schema({
    subCategory: {
      type: String,
      required: true,
      default: ''
    },
    brand: {
      type: String,
      required: true,
      default: ''
    },
    brandReference: {
      type: String,
      required: true,
      default: ''
    },
    serial: {
      type: String,
      required: true,
      default: ''
    },
    model: {
      type: String,
      required: true,
      default: ''
    },
    address: {
      type: String,
      required: true,
      default: ''
    },
    transactionId: {
      type: String,
      required: true,
      default: ''
    },
    exchangeAddress: {
      type: String,
      required: true,
      default: ''
    },
    walletAddress: {
      type: String,
      required: true,
      default: ''
    },
    purchasedFrom: {
      type: String,
      required: true,
      default: ''
    },
    purchaseValue: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    stolen: {
      type: String,
      required: true,
      default: ''
    },
    document: {
      type: String,
      required: true,
      default: ''
    },
    invoice: {
      type: String,
      required: true,
      default: ''
    }
  });
  
   const CryptoCard = mongoose.model('CryptoCard', cryptoSchema);
  import { mongoose } from 'mongoose';
const jewelrySchema = new mongoose.Schema({
  subCategory: { type: String, required: true, default: "" },
  brand: { type: String, required: true, default: "" },
  brandReference: { type: String, required: true, default: "" },
  serial: { type: String, required: true, default: "" },
  model: { type: String, required: true, default: "" },
  material: { type: String, required: true, default: "" },
  size: { type: String, required: true, default: "" },
  stone: { type: String, required: true, default: "" },
  shape: { type: String, required: true, default: "" },
  color: { type: String, required: true, default: "" },
  cut: { type: String, required: true, default: "" },
  clarity: { type: String, required: true, default: "" },
  caratWeight: { type: String, required: true, default: "" },
  laserInscription: { type: String, required: true, default: "" },
  gradingReports: { type: String, required: true, default: "" },
  purchasedFrom: { type: String, required: true, default: "" },
  purchaseValue: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  engraving: { type: String, required: true, default: "" },
  trademarks: { type: String, required: true, default: "" },
  distinguishingFeatures: { type: String, required: true, default: "" },
  certificateOfAuthenticity: { type: String, required: true, default: "" },
  valuationReport: { type: String, required: true, default: "" },
});

const JewelryCard = mongoose.model("JewelryCard", jewelrySchema


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

const NFTCard = mongoose.model('NFTCard', nftSchema);import {mongoose } from mongoose; 
const sneakersSchema = new mongoose.Schema({
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
    releaseDate: {type: Date, required: true, default: Date.now},
    serie: {type: String, required: true, default: ""}
  });
  
  export const SneakersCard = mongoose.model("SneakersCard", sneakersSchema);
  import mongoose from 'mongoose';
const vintageSchema = new mongoose.Schema({
    brand: { type: String, default: "", required : true },
    brandReference: { type: String, default: "", required : true },
    artist: { type: String, default: "", required : true },
    serial: { type: String, default: "", required : true },
    model: { type: String, default: "", required : true },
    material: { type: String, default: "", required : true },
    size: { type: String, default: "", required : true },
    purchasedFrom: { type: String, default: "", required : true },
    purchaseValue: { type: String, default: "", required : true },
    description: { type: String, default: "", required : true },
    engraving: { type: String, default: "", required : true },
    trademarks: { type: String, default: "", required : true },
    otherFeatures: { type: String, default: "", required : true },
    });

    const VintageCard = mongoose.model('VintageCard', vintageSchema);import mongoose from 'mongoose';
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
  
  const ArtCard = mongoose.model("ArtCard", artSchema);import {mongoose } from mongoose; 
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
  import mongoose, { type Model } from "mongoose";
import { ONE_DAY } from "$lib/const";

export interface EmailVerificationRequest {
  _id: string;
  userId: string;
  token: string;
  expiresAt: Date;
}

const modelName = "EmailVerificationRequest";
export const EmailVerificationRequests: Model<EmailVerificationRequest> =
  mongoose.models[modelName] ||
  mongoose.model(
    modelName,
    new mongoose.Schema({
      userId: {
        type: String,
        required: true,
        ref: "user",
      },
      token: {
        type: String,
        required: true,
        default: () => crypto.randomUUID(),
      },
      expiresAt: {
        type: Date,
        required: true,
        default: () => Date.now() + ONE_DAY,
      },
    }),
    modelName
  );
import { mongoose } from "mongoose";
const leatherSchema = new mongoose.Schema({
  subcategory:{type:String, required: true, default: ""} ,
  brand: { type: String, required: true, default: "" },
  brandReference: { type: String, required: true, default: "" },
  serial: { type: String, required: true, default: "" },
  model: { type: String, required: true, default: "" },
  material: { type: String, required: true, default: "" },
  size: { type: String, required: true, default: "" },
  purchasedFrom: { type: String, required: true, default: "" },
  purchaseValue: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  hotStamp: { type: String, required: true, default: "" },
  uniqueFeatures: { type: String, required: true, default: "" },
});

const LeatherCard = mongoose.model("LeatherCard", leatherSchema);
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
    const OtherCard = mongoose.model('OtherCard', otherSchema);import mongoose from 'mongoose';
const techSchema = new mongoose.Schema({
    subCategory: { type: String, required: true, default: "" },
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    year: { type: String, required: true, default: "" },
    caseMaterial: { type: String, required: true, default: "" },
    size: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    engraving: { type: String, required: true, default: "" },
    uniqueFeatures: { type: String, required: true, default: "" },
  });
  const TechCard = mongoose.model("TechCard", techSchema);
import mongoose , {type Model} from 'mongoose'

export interface Card {
    __id: string; 
    __myneId: string; 
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
                type: String, required:true 
            }
                __myneId: 
                {type: String , required: true, default: ''},
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
                date: {type: ()=> Date.now(), required: true,} ,
                pictures: [String], 
                certificateOfAuth: [String],
                valuationReport: [String],  
                receipts: [String]
            })
       );
import mongoose from 'mongoose';
const collectiblesSchema = new mongoose.Schema({
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
  const CollectiblesCard = mongoose.model("CollectiblesCard", collectiblesSchema);
import mongoose from 'mongoose';
const gunSchema = new mongoose.Schema({
    subCategory: { type: String, required: true, default: "" },
    brand: { type: String, required: true, default: "" },
    brandReference: { type: String, required: true, default: "" },
    serial: { type: String, required: true, default: "" },
    model: { type: String, required: true, default: "" },
    caseMaterial: { type: String, required: true, default: "" },
    size: { type: String, required: true, default: "" },
    caliber: { type: String, required: true, default: "" },
    purchasedFrom: { type: String, required: true, default: "" },
    purchaseValue: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    engraving: { type: String, required: true, default: "" },
    uniqueFeatures: { type: String, required: true, default: "" },
  });
  const GunCard = mongoose.model("GunCard", gunSchema);
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

const MotorVehicleCard = mongoose.model('MotorVehicleCard', motorVehicleSchema);import { ONE_DAY } from "$lib/const";
import mongoose, { type Model } from "mongoose";

export interface PasswordResetRequest {
    _id: string;
    userId: string;
    token: string;
    expiresAt: Date;
}

const modelName = "PasswordResetRequest";
export const PasswordResetRequests: Model<PasswordResetRequest> = mongoose.models[modelName] ||
    mongoose.model(
        modelName,
        new mongoose.Schema({
            userId: {
                type: String,
                required: true,
                ref: 'user'
            },
            token: {
                type: String,
                required: true,
                default: () => crypto.randomUUID()
            },
            expiresAt: {
                type: Date,
                required: true,
                default: () => Date.now() + ONE_DAY
            },
        }),
        modelName
    );
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
