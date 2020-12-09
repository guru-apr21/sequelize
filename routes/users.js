const express = require('express');
const { Op } = require('sequelize');
const { sequelize } = require('../models/User');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, age } = req.body;
    const user = await User.create(
      { firstName, lastName, email, age },
      { fields: ['firstName', 'email'] }
    );
    res.json(user.toJSON());
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        age: {
          [Op.gt]: 20,
        },
        firstName: 'Guru',
      },
      attributes: {
        exclude: ['firstName'],
        include: [
          [sequelize.fn('lower', sequelize.col('firstName')), 'firstName'],
        ],
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

module.exports = router;
