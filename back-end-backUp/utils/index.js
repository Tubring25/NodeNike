const jwt = require('jsonwebtoken');

const Utils = {
  serect: 'Shoot',
  createToken (data) {
    return jwt.sign({data: data}, this.serect, {expiresIn: '2d'});
  },
  verifyToken (token) {
    try {
      return jwt.verify(token, this.serect)
    }
    catch {
      return 'token已失效'
    }
  },
  
}

module.exports = Utils
