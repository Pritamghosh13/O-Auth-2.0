import { Router } from "express";
import { User } from "../model/user.model.js";
import { verifyJWT } from "../middleWare/auth.middleware.js";


const router = Router();

router.get("/profile", verifyJWT, async (req, res) => {

    const user = await User.findById(req.user.id).select("-__v");

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        user
    });

});

export default router;
