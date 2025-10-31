export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ success: true, data: customers });
  } catch (err) {
    next(err);
  }
};

export const getOneCustomer = async (req, res, next) => {
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

export const addCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({
      success: true,
      message: "Customer created successfully!",
      data: customer,
    });
  } catch (err) {
    next(err);
  }
};

export const updateCustomer = async (req, res, next) => {
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

export const deleteCustomer = async (req, res, next) => {
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
