const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const authController=require("../../controllers/auth/auth");
// const User = require('../../models/User');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth,authController.getUserByToken);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  authController.loginAndGetToken
);

module.exports = router;
