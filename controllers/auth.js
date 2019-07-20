exports.signup = (req, res, next) => {
  const {username, password} = req.body
  res.status(200).json({username, password})
}
