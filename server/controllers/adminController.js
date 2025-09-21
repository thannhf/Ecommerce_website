import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true, //Prevents client-side javascript from accessing the cookie
  secure: process.env.APP_ENV === "production", // ensure the cookie is only sent over HTTPS in production
  sameSite: process.env.APP_ENV === "production" ? "none" : "strict", //Controls when cookies are sent "none" allows corss-site in production, "strict" block corss-site by default
};

// admin login route /api/admin/login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASS
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("adminToken", token, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time
      });
      return res.json({
        success: true,
        message: "Admin Logged in",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Check Auth /api/admin/is-auth
export const isAdminAuth = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Logout Admin /api/admin/Logout
export const adminLogout = async (req, res) => {
  try {
    res.clearCookie("adminToken", cookieOptions);
    return res.json({ success: true, message: "Admin Logged out" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};