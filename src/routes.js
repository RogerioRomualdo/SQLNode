const express = require("express");
const userController = require("./controllers/userController");
const addressController = require("./controllers/addressController.js");

const routes = express.Router();

routes.get("/users", userController.index);
routes.post("/users", userController.store);

routes.get("/users/:user_id/addresses", addressController.index);
routes.post("/users/:user_id/addresses", addressController.store);

module.exports = routes;
