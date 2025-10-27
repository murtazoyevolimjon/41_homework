import districtModel from "../models/districts.model.js";

export const createDistricts = async (req, res, next) => {
  try {
    const createDistrict = await districtModel.create(req.body);
    res.status(201).send({ message: `Created district`, data: createDistrict });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllDistricts = async (req, res, next) => {
  try {
    const getAllDistrict = await districtModel.find();
    res.status(200).json({
      message: `found all Disrtict`,
      count: getAllDistrict.length,
      data: getAllDistrict,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOneDistricts = async (req, res, next) => {
  try {
    const getOneDistrict = await districtModel.findById(req.params.id);
    if (!getOneDistrict) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from Disrtict` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from Disrtict`,
      data: getOneDistrict,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateDistricts = async (req, res, next) => {
  try {
    const updateDistrict = await districtModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updateDistrict) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from Disrtict` });
    }
    res.status(200).json({ message: `Updated Disrtict`, data: updateDistrict });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteDistricts = async (req, res, next) => {
  try {
    const deleteDistrict = await districtModel.findByIdAndDelete(req.params.id);
    if (!deleteDistrict) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from Disrtict` });
    }
    res.status(200).json({ message: `deleted District ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
