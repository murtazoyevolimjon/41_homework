import Order from "../model/ordersModel.js";
export const getOrders = async (req, res, next) => {
  try {
    const order = await Order.find();
    res.send({ message: order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.find({ id });
    res.send({ message: order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.send({ message: order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found!" });
    }

    res.status(200).json({
      message: "Order updated successfully!",
      data: updatedOrder,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.deleteOne(id);
    if (order.deletedCount === 0) {
      return res.status(404).json({ message: "Order is not found" });
    }
    res.send({ message: order });
  } catch (err) {
    console.log(err);
    next(err);
  }
};