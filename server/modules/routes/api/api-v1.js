const express = require('express');
const router = express.Router();

// middlewares 
const apiAuth = require('./middleware/apiAuth');

// Controllers 
const { api : ControllerApi } = config.path.controllers;
const AuthController = require(`${ControllerApi}/v1/AuthController`);
const UserController = require(`${ControllerApi}/v1/UserController`);


router.post('/login' , AuthController.login.bind(AuthController));
router.post('/register' , AuthController.register.bind(AuthController));
router.post('/user' , apiAuth , UserController.index.bind(UserController));
router.post('/edit' , apiAuth , UserController.edit.bind(UserController));


module.exports = router;