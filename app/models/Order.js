import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const {Schema} = mongoose

const OrderSchema = new Schema({
    id: ObjectId,
    fullName: {type: String, required: true},
    totalPrice: { type: Number, required: true },
    phone: {type: Number, required: true},
    cart: { type: Array, required: true },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
    wilaya: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true},
    shippingMethod: {type: String, enum: ['domicile', 'bureau'], required: true},
    shippingAddress: { type: String, required: true }
})

const Order = mongoose.model('Order', OrderSchema)

export default Order