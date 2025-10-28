// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.stack || err.message);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Serverda kutilmagan xato yuz berdi",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};