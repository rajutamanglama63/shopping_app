const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRouter");

connectDB();

dotenv.config();

const app = express();

const PORT = process.env.PORT || 2021;


app.use(express.json());

app.use("/api/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})