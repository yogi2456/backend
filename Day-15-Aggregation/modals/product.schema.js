import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

const ProductSchema = mongoose.model("products", productSchema);

export default ProductSchema;