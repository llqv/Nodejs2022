import product from "../models/product";

export const list = async (req, res) => {
    try {
        const data = await product.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay"
        })
    }
}

export const read = async (req, res) => {
    try {
        const id = req.params.id
        const products = await product.findOne({ _id: id }).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay"
        })
    }
}

export const add = async (req, res) => {
    try {
        const products = await new product(req.body).save()
        return res.status(200).json('Them san pham thanh cong')
    } catch (error) {
        res.status(400).json({
            error: "Them khong thanh cong"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const products = await product.findOneAndDelete({ _id: id })
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
        const products = await product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: "Cap nhat khong thanh cong"
        })
    }
}