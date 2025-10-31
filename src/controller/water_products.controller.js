import Delivery_staff from "../model/delivery_staffModel.js";

export const create = async (req, res, next) => {
  try {
    const delivery_staff = await Delivery_staff.create(req.body);
    res.status(201).json({
      message: "Delivery staff successfully created!",
      data: delivery_staff,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const delivery_staff = await Delivery_staff.find();
    res.status(200).json(delivery_staff);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delivery_staff = await Delivery_staff.findById(id);

    if (!delivery_staff) {
      return res.status(404).json({ message: "Delivery staff not found!" });
    }

    res.status(200).json(delivery_staff);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedStaff = await Delivery_staff.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedStaff) {
      return res.status(404).json({ message: "Delivery staff not found!" });
    }

    res.status(200).json({
      message: "Delivery staff updated successfully!",
      data: updatedStaff,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedStaff = await Delivery_staff.findByIdAndDelete(id);

    if (!deletedStaff) {
      return res.status(404).json({ message: "Delivery staff not found!" });
    }

    res.status(200).json({ message: "Delivery staff deleted successfully!" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
