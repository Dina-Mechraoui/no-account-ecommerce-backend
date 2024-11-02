import mongoose from "mongoose";
import { ObjectId, Timestamp } from "mongodb";

const {Schema} = mongoose

const ProductSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {type: String, required: true},
    price: { type: Number, required: true },
    stock: [{
        size: { type: String, required: true },
        color: { type: String, required: true },
        quantity: { type: Number, required: true, min: 0 }
    }],
    description: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['robe']
    },
    promotion: {
        discountPercentage: { type: Number, default: null },
        startDate: { type: Date, default: null },
        endDate: { type: Date, default: null }
    },
    picture: [{ type: String }] 
})

const Product = mongoose.model('Product', ProductSchema)

export default Product