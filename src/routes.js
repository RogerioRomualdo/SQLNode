const express = require("express");
const userController = require("./controllers/userController");
const addresController = require("./controllers/addressController.js");

const routes = express.Router();

routes.get("/users", userController.index);
routes.post("/users", userController.store);

routes.post("/users/:user_id/addresses", addresController.store);

module.exports = routes;
