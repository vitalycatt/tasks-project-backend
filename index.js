import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5050;
const DB_URL =
  "mongodb+srv://user:user@cluster0.nsiqyth.mongodb.net/?retryWrites=true&w=majority";

const app = express();

const corsOrigin = {
  // FRONTEND PORT
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

// CONVERT DATA TO JSON
app.use(express.json());
// MAKE POSSIBLE TO OPEN SMTH STATIC LIKE IMAGE BY PATH
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    // DATA BASE CONNECT
    await mongoose.connect(DB_URL);
    // STARTING SERVER INFO FOR TERMINAL
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
