const express = require("express");
const cookieParser = require("cookie-parser");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Dummy user 
const USER = {
  username: "admin",
  password: "password123"
};

app.post("/login", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = decoded.split(":");

  if (username === USER.username && password === USER.password) {
    res.cookie("authToken", "valid-user-token", {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 
    });

    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Logout Route
app.post("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.json({ message: "Logged out successfully" });
});

// Protected Routes
app.use("/api", protectedRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
