import product from "../models/product";
import category from "../models/product";

export const list = async (req, res) => {
    try {
        const data = await category.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay danh muc"
        })
    }
}

export const read = async (req, res) => {
    try {
        const id = req.params.id
        const categories = await category.findOne({ _id: id }).exec()
        const products = await product.find({categories: category}).populate('category').select("-category").exec();
        res.json({
            categories,
            products
        })
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay"
        })
    }
}

export const add = async (req, res) => {
    try {
        const categories = await new category(req.body).save()
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            error: "Them khong thanh cong"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const categories = await category.findOneAndDelete({ _id: id })
        return res.status(200).json('Xoa thanh cong')
    } catch (error) {
        res.status(400).json({
            error: "Xoa khong thanh cong"
        })
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params
        const categories = await category.findOneAndUpdate({ _id: id }, req.body, { new: true })
        return res.status(200).json('Cap nhat thanh cong')
    } catch (error) {
        res.status(400).json({
            error: "Cap nhat khong thanh cong"
        })
    }
}