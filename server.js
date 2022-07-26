const express = require("express");
const cors = require("cors");
//permettre l’accés au backend
const app = express();
var corsOptions = {
origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// changer les requests de content-type - application/json
app.use(express.json());
// changer les requests content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route bienvenu
app.get("/", (req, res) => {
res.json({ message: "welcome to REST DEMO." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});