import order_itemModel from "../models/order_items.model.js";
import { getAllOrder } from "./orders.controller.js";

export const createOrderItem = async (req, res, next) => {
  try {
    const createOrder = await order_itemModel.create(req.body);
    res.status(201).send({ message: `Created order_item`, data: createOrder });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllOrderItem = async (req, res, next) => {
  try {
    const getAllOrder_item = await order_itemModel.find();
    res.status(200).json({
      message: `found all order_item`,
      count: getAllOrder_item.length,
      data: getAllOrder_item,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOneOrderItem = async (req, res, next) => {
  try {
    const getOneOrderItem = await order_itemModel.findById(req.params.id);
    if (!getOneOrderItem) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from orderItem` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from order_item`,
      data: getOneOrderItem,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateOrderItem = async (req, res, next) => {
  try {
    const updateOrder_item = await order_itemModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateOrder_item) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order_item` });
    }
    res.status(200).json({ message: `Updated order`, data: updateOrder_item });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteOrderItem = async (req, res, next) => {
  try {
    const deleteOrder_item = await order_itemModel.findByIdAndDelete(
      req.params.id,
    );
    if (!deleteOrder_item) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from order_item` });
    }
    res.status(200).json({ message: `deleted order_item ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
