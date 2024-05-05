const express = require('express');
const routers = express.Router();

const { query } = require('express-validator');
const { register, login, forgotPassword, resetPassword, verifyEmail } = require('../controllers/authController.js');
const { contact } = require('../controllers/contactController.js');

routers.post('/register',
    [query('username').notEmpty().isLength({ min: 8 }).withMessage('Not a valid Username'),
    query('email').notEmpty().trim().isEmail().withMessage('Not a valid e-mail address'),
    query('password').notEmpty().isLength({ min: 8 }).withMessage('Not a valid password')], register);


routers.post('/login',
    [query('email').notEmpty().trim().isEmail().withMessage('Not a valid e-mail address'),
    query('password').notEmpty().isLength({ min: 8 }).withMessage('Not a valid password')], login);

routers.post('/forgot-password',
    [query('email').notEmpty().trim().isEmail().withMessage('Not a valid email address')], forgotPassword);

routers.post("/reset-password/:id/:token", resetPassword);

routers.post('/contact',
    [query('fullname').notEmpty().isLength({ min: 8 }).withMessage('Not a valid Name'),
    query('phone').notEmpty().isLength({ min: 10, max: 10 }).withMessage('Not a valid phone number'),
    query('email').notEmpty().trim().isEmail().withMessage('Not a valid e-mail address'),
    query('subject').notEmpty().withMessage('Not a valid subject'),
    query('message').notEmpty().withMessage('Not a valid message')], contact);

routers.get('/:id/verify/:token', verifyEmail);

module.exports = routers;

