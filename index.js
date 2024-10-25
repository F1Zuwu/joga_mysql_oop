const express = require("express")
const app = express()
const con = require("./utils/db")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to joga_mysql db")
})

const articleRoutes = require("./routes/article")
app.use("/", articleRoutes)

app.listen(3000, () => {
    console.log("👍")
})