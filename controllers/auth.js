const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const User = require('../models/user')

exports.signup = async (req, res, next) => {
  const {email, username, password} = req.body
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [
        {email},
        {username}
      ]
    }
  })

  if (existingUser) {
    return res.status(422).json({message: 'email/username already exists'})
  }

  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(password, salt, async (err, hashedPwd) => {
      if (err) throw err
      // await User.sync({force: true})
      const user = await User.create({
        email,
        username,
        password: hashedPwd
      })
      res.status(201).json({message: 'user created', user})
    })
  })
}
