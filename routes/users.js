const router = require('express').Router();

const usersController = require('../controllers/users');

router.get('/users', usersController.getUsers);
router.post('/users/register', usersController.userSignup);
router.post('/users/login', usersController.userLogin);
router.get('/users/:userId', usersController.getUser);

module.exports = router;