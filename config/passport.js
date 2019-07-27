const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = './keys.js'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    
  }))
}
