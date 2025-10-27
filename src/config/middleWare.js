export const errorWare = (req, res, error, next) => {
  console.log(error.message);
  return res
    .status(error.status || 500)
    .json({ message: error.message || `error in the server` });
};