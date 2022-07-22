import mongoose from "mongoose";

const categorySchema  = mongoose.Schema({
    name : {
        type : String,
    }
});
export default mongoose.model('Categories', categorySchema)