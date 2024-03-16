const { body, validationResult } = require('express-validator');

const signUpValidator = [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('mobile').trim().notEmpty().withMessage('Mobile number is required').isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digits'),
        body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
        body('password').trim().notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

module.exports = {signUpValidator, validationResult}