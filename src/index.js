const express = require("express");
const { PORT } = require("./config/serverConfig");
const apirouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apirouter);

app.listen(PORT, () => {
    console.log("server is running at ", PORT);
});