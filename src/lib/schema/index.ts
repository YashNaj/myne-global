import { z } from "zod";

export const emailSchema = z.string().email();
export const isValidEmail = (email: string) => emailSchema.safeParse(email).success

export const passwordSchema = z.string().min(4)
db.createCollection('subscriptions')

db.collection('subscriptions').insertMany([
  {
    name: "One Card", 
    uses: 1,
    price: 5.00
  },
  {
     name: "5 Cards", 
     uses: 5,
     price: 20.00
  },
  {
    name: "10 Cards", 
    uses: 10, 
    price: 30.00
  },
  {name: "Stolen Search One",
  uses: 1, 
  price:60.00},
    {
    name: "One Card", 
    uses: 1,
    price: 5.00
  },
  {
     name: "5 Cards", 
     uses: 5,
     price: 20.00
  },
  {
    name: "10 Cards", 
    uses: 10, 
    price: 30.00
  },
  {name: "25 cards",
  uses: 25, 
  price:60.00},
])