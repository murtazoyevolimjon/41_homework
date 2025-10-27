import { ZodError } from "zod";

export const validation = (schema) => (req, res, next) => {
  try {
    const validatedData = schema.parse(req.body);
    req.validatedData = validatedData;
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const list = error.errors || error.issues || [];
      const errors = list.map((err) => ({
        path: err.path?.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        success: false,
        message: "Validation xatosi",
        errors,
      });
    }

    next(error);
  }
};
