import mongoose from 'mongoose';
const { models, model, Schema } = mongoose;

const WarningSchema = new Schema({
    truckId: { type: String, ref: 'Truck' },
    metric: String,
    value: Number,
    message: String
  }, { timestamps: true });
  
  export const Warning = models?.Warning || model('Warning',WarningSchema);