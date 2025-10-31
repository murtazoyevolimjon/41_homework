export const deliveryStaffOnly = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: please login first" });
    }

    if (req.user.role !== "delivery_staff") {
      return res.status(403).json({ message: "Access denied: only delivery staff allowed" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error in deliveryStaffOnly middleware" });
  }
};
