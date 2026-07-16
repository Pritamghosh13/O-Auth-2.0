import passportGoogle from "passport-google-oauth20";
import passport from "passport";
import { User } from "../src/model/user.model.js";

const GoogleStrategy = passportGoogle.Strategy;


import dotenv from "dotenv"

dotenv.config()


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
  callbackURL: "http://localhost:8000/auth/google/callback"
},

  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({
        googleId: profile.id
      })

      if (!user) {

        user = await User.create({

          googleId: profile.id,

          fullname: profile.displayName,

          email: profile.emails[0].value,

          avatar: profile.photos[0].value

        });

      }

      return done(null, user);

    } catch (error) {

      done(error, null);
      
    }
  }
));