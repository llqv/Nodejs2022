// import mongoose, { ObjectId } from "mongoose";

// const productSchema = mongoose.Schema({
//     name: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     category: {
//         type: ObjectId,
//         ref: 'category'
//     }
// })
// export default mongoose.model('Products', productSchema)

import mongoose, { ObjectId } from "mongoose"

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "The field is not be empty"]
    },
    originalPrice: {
        type: Number,
        required: [true, "The field is not be empty"]
    },
    image: {
        type: String,
        required: [true, "The field is not be empty"]
    },
    saleOffPrice: {
        type: Number,
        required: [true, "The field is not be empty"]
    },
    category: {
        type: ObjectId,
        ref: 'category',
    },
    feature: {
        type: String,
        required: [true, "The field is not be empty"]
    },
    description: {
        type: String,
        required: [true, "The field is not be empty"]
    },
    shortDescription: {
        type: String,
        required: [true, "The field is not be empty"]
    }
})
export default mongoose.model('products', productSchema)