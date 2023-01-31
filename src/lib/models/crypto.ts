
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
  
  export const CryptoCard = mongoose.model('CryptoCard', cryptoSchema);
  