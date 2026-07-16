import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false
    })
);

router.get(
    "/google/callback",

    passport.authenticate("google", {
        session: false,
        failureRedirect: "/"
    }),

    async (req, res) => {

        const accessToken = jwt.sign(

            {
                id: req.user._id
            },

            process.env.ACCESS_TOKEN_SECRET,

            {
                expiresIn: "30m"
            }

        );

        const refreshToken = jwt.sign(

            {
                id: req.user._id
            },

            process.env.REFRESH_TOKEN_SECRET,

            {
                expiresIn: "7d"
            }

        );

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false
        });

        res.redirect("http://localhost:8000/user/profile");
    }
);

export default router;