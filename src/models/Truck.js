import mongoose from 'mongoose';
const { models, model, Schema } = mongoose;

const TruckSchema = new Schema({
  _id: { type: String },
  driverId: { type: String, ref: 'Driver' },
  incidents: { type: Number },
  status: { type: String },
  note: { type: String }
}, { timestamps: true });

export const Truck = models?.Truck || model('Truck', TruckSchema);

  