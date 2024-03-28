const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from request header
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
