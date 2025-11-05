import orderModel from "../models/order.model.js";

export const create = async (req, res, next) => {
  try {
    const created = await Order.create(payload);
    res.status(201).json({ success: true, data: created });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export const getAll = async (req, res, next) => {
  try {
    const getAllOrder = await orderModel.find();
    res.status(200).json({
      message: `found all Order`,
      count: getAllOrder.length,
      data: getAllOrder,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const getOneOrder = await orderModel.findById(req.params.id);
    if (!getOneOrder) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from order`,
      data: getOneOrder,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updateOrder = await orderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateOrder) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order` });
    }
    res.status(200).json({ message: `Updated order`, data: updateOrder });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const deleteOrder = await orderModel.findByIdAndDelete(req.params.id);
    if (!deleteOrder) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order` });
    }
    res.status(200).json({ message: `deleted order` });
  } catch (error) {
    console.log(error)
    next(error)
  }
};