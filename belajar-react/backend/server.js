const express = require("express");
const cors  = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// API Sederhana
app.get("/api/mesage", (req, res)=> {
    res.json({message: "Halo dari Backend!"});
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));