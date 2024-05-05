
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routers = require("./routers/routers.js");
const dbconnect = require("./utils/db.js");
const os = require("os");
const app = express();
dotenv.config();
dbconnect();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    // origin: "http://localhost:5173",
    // methods: "GET,POST",
    // credentials: true
}));
app.use("/api", routers);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})

