const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const productsRoutes = require("./routes/productsRoutes");
const { connectToMongoDB } = require("./utils/MongoConnection");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
connectToMongoDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

//Images
app.use("/images", express.static(path.join(__dirname, "product-images")));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
