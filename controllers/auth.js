const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const User = require('../models/user')
const keys = require('../config/keys')

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

exports.login = async (req, res, next) => {
  const {username, password} = req.body
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [
        {email: username},
        {username}
      ]
    }
  })

  if (!existingUser) {
    return res.status(401).json({message: 'invalid username/password'})
  }

  const isMatch = await bcrypt.compare(password, existingUser.password)

  if (isMatch) {
    return jwt.sign(
      {
        id: existingUser.id,
        username: existingUser.username,
        email: existingUser.email
      },
      keys.secretOrKey,
      {expiresIn: '1h'},
      (err, token) => {
        if (!err) {
          return res.status(200).json({token: `Bearer ${token}`})
        }
      }
    )
  } else {
    res.status(401).json({message: 'invalid username/password'})
  }
}
