const bcrypt = require('bcrypt')

const saltRounds = 12

exports.generatePassword = (password) => {
  return new Promise((resolve, reject) => {
    // generate salt
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return reject(err)
      // generate password hash
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return reject(err)
        else return resolve(hash)
      })
    })
  })
}

exports.comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) return reject(err)
      else return resolve(res)
    })
  })
}
