// import { app } from "./app.js";
// import dotenv from "dotenv"
// import "../auth/google.js"



// app.use(passport.initialize())


// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));
 
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


// app.listen(8000, () => {
//     console.log("The serve running on port 8000");
    
// })



import connectDB from "./db.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config()


connectDB() 
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);

        })

        app.on("error", (error) => {  //for server errors.
            console.log("ERROR:", error)
        })

    })
    .catch((error) => {   //for DB related error.
        console.log("MongoDB connection failed !! ", error);

})