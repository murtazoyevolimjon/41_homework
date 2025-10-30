import Customer from "../model/customerModel.js";

export const create = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ success: true, data: customers });
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found!" });
    }

    res.status(200).json({ success: true, data: customer });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({
      success: true,
      message: "Customer created successfully!",
      data: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        role: customer.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Customer updated successfully!",
      data: customer,
    });
  } catch (err) {
    next(err);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Customer.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Customer not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully!",
    });
  } catch (err) {
    next(err);
  }
};
