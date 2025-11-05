export const errorHandler = (err, req, res, next) => {
  console.error("Server Error:")
  console.error(err.stack)

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "error in the server",
  });
};