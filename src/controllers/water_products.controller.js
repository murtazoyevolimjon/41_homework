import water_productsModel from "../models/water_products.model.js";

export const createwater = async (req, res, next) => {
  try {
    const createwater = await water_productsModel.create(req.body);
    res
      .status(201)
      .json({ message: `Created water_product`, data: createwater });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllwater = async (req, res, next) => {
  try {
    const getAllwater = await water_productsModel.find();
    res.status(200).json({
      message: `found all water`,
      count: getAllwater.length,
      data: getAllwater,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOnewater = async (req, res, next) => {
  try {
    const getOnewater = await water_productsModel.findById(req.params.id);
    if (!getOnewater) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from water` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from water`,
      data: getOnewater,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updatewater = async (req, res, next) => {
  try {
    const updatewater = await water_productsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatewater) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from water` });
    }
    res.status(200).json({ message: `Updated water`, data: updatewater });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deletewater = async (req, res, next) => {
  try {
    const deletewater = await water_productsModel.findByIdAndDelete(
      req.params.id,
    );
    if (!deletewater) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from water` });
    }
    res.status(200).json({ message: `deleted water ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
