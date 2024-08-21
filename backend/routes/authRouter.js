const {Router} = require('express');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const signUp = require('../controllers/authControllers/signUp');
const login = require('../controllers/authControllers/login');
const logout = require('../controllers/authControllers/logout');
const auth = require('../middlewares/auth');

const authRouter = Router();

authRouter.post('/signup',ctrlWrapper(signUp));
authRouter.post('/login', ctrlWrapper(login));
authRouter.post('/logout', auth, ctrlWrapper(logout));

module.exports = authRouter;