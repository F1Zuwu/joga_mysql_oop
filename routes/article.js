const express = require("express");
const articleControllerClass = require("../controllers/article");

const router = express.Router()

const articleController = new articleControllerClass()

router.get("/", (req, res) =>  articleController.getAllArticles(req, res));

module.exports = router;