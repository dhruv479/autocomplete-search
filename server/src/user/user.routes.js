const router = require('express').Router();

const {
  addUserController,
  searchUserController,
} = require('./user.controller');

router.post('/', addUserController);
router.get('/', searchUserController);

module.exports = router;
