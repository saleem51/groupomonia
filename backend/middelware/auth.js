const jwt = require('jsonwebtoken');


// permet d'authentifier les requetes grâce au token

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decodedToken = jwt.verify(token, 'TOKEN');
    console.log(deocodedToken);
    const userId = decodedToken.userId;
    console.log(userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: 'pas marché'
    });
  }
};