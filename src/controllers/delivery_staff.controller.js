import delivery_staffModel from "../models/delivery_staff.model.js";

export const createDeli = async (req, res, next) => {
  try {
    const createDeli = await delivery_staffModel.create(req.body);
    res
      .status(201)
      .send({ message: `Created delivery_staff`, data: createDeli });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllDeli = async (req, res, next) => {
  try {
    const getAllDeli = await delivery_staffModel.find();
    res.status(200).send({
      message: `Find all delivery_staff`,
      count: getAllDeli.length,
      data: getAllDeli,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOneDeli = async (req, res, next) => {
  try {
    const getOneDeli = await delivery_staffModel.findById(req.params.id);
    if (!getAllDeli) {
      return res
        .status(404)
        .send({ message: `not found ID ${req.params.id} from delivery_staff` });
    }
    res.status(200).send({
      message: `found ID ${req.params.id} from delivery_staff`,
      data: getOneDeli,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateDeli = async (req, res, next) => {
  try {
    const updateDeli = await delivery_staffModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateDeli) {
      return res
        .status(404)
        .send({ message: `not found ID ${req.params.id} from delivery_staff` });
    }
    res.status(200).send({
      message: `update delivery_staffId ID ${req.params.id} frpm delivery_staff`,
      data: updateDeli,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteDeli = async (req, res, next) => {
  try {
    const deleteDeli = await delivery_staffModel.findByIdAndDelete(
      req.params.id,
    );
    if (!deleteDeli) {
      return res
        .status(404)
        .send({ message: `not found ID ${req.params.id} from delivery_staff` });
    }
    res.status(200).send({ message: `Deleted delivery_staff` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};