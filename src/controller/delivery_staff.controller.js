import Delivery_staff from "../model/delivery_staffModel.js";
export const getDelivery_staffs = async (req, res, next) => {
  try {
    const delivery_staff = await Delivery_staff.find();
    res.send(delivery_staff);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const getOneDelivery_staff = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delivery_staff = await Delivery_staff.find({ id });
    res.send({ message: delivery_staff });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addDelivery_staff = async (req, res, next) => {
  try {
    const delivery_staff = await Delivery_staff.create(req.body);
    res.send({ message: delivery_staff });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const updateDelivery_staff = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedStaff = await Delivery_staff.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true },
    );

    if (!updatedStaff) {
      return res.status(404).send("Delivery staff is not found!");
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

export const deleteDelivery_staff = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delivery_staff = await Delivery_staff.deleteOne(id);
    if (delivery_staff.deletedCount === 0) {
      return res.status(404).json({ message: "Delivery_staff is not found" });
    }
    res.send({ message: delivery_staff });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
