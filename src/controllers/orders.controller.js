import orderModel from "../models/orders.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const createOrder = await orderModel.create(req.body);
    res.status(201).send({ message: `Created order`, data: createOrder });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllOrder = async (req, res, next) => {
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

export const getOneOrder = async (req, res, next) => {
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

export const updateOrder = async (req, res, next) => {
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

export const deleteOrder = async (req, res, next) => {
  try {
    const deleteOrder = await orderModel.findByIdAndDelete(req.params.id);
    if (!deleteOrder) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order` });
    }
    res.status(200).json({ message: `deleted order ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
