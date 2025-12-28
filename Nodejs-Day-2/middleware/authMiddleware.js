
const authMiddleware = (req, res, next) => {
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized. Please login." });
  }

  // Simple token valid
  if (authToken !== "valid-user-token") {
    return res.status(403).json({ message: "Invalid token." });
  }

  next();
};

module.exports = authMiddleware;
