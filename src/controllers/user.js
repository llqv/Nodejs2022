import user from "../models/user";


export const userById = async (req, res, next, id) => {
    try {
        const users = await user.findById(id).exec()
        if (!user) {
            return res.status(400).json({
                messahe: "Khong tim thay nguoi dung"
            })
        }
        user.password = undefined;
        req.profile = user;
        next();
    } catch (error) {

    }
}