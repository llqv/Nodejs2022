import { expressjwt } from "express-jwt";

export const requireSignin = expressjwt({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth", // req.auth
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth.id;
    if (status) {
        next();
    } else {
        return res.status(400).json({
            message: "Ban khong phai thanh vien he thong"
        })
    }
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        res.status(400).json({
            message: "Khong phai la admin"
        })
    }
}