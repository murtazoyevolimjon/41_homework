import addressModel from "../models/address.model.js";

export const create = async (req, res, next) => {
  try {
    const newAddress = await addressModel.create(req.validatedData);
    res.status(201).send({ message: `Addres created`, data: newAddress });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const getAddress = await addressModel.find();
    res.status(200).send({
      message: `find all address`,
      count: getAddress.length,
      data: getAddress,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const getAddress = await addressModel.findById(req.params.id);
    if (!getAddress) {
      return res.status(404).send({ message: `not found address` });
    }
    res.status(200).send({ message: `found one address`, data: getAddress });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const address = await addressModel.findByIdAndUpdate(
      req.params.id,
      req.validatedData,
      { new: true, runValidators: true },
    );

    if (!address) {
      return res.status(404).send({ message: `not found address` });
    }
    res.status(200).send({ message: `address updated`, data: address });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const address = await addressModel.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).send({ message: `not found address` });
    }
    res.status(204).send({ message: `Address deleted` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};