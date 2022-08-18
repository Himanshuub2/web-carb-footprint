import express from "express";
import cors from "cors";
import getDetails from "./Controls.js";



const port = 8000;
const app = express();

app.listen(port,console.log("hello"))

const router = express.Router();
app.use("/",router);

router.get("/details",getDetails)

