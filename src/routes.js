const express = require("express");
const userController = require("./controllers/userController");
const addressController = require("./controllers/addressController.js");
const techController = require("./controllers/techController.js");

const routes = express.Router();

routes.get("/users", userController.index);
routes.post("/users", userController.store);

routes.get("/users/:user_id/addresses", addressController.index);
routes.post("/users/:user_id/addresses", addressController.store);

routes.get("/users/:user_id/techs", techController.index);
routes.post("/users/:user_id/techs", techController.store);

module.exports = routes;
