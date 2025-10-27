import addressModel from "../models/address.model.js";

export const createAddress = async (req, res, next) => {
  try {
    const newAddress = await addressModel.create(req.body);
    res.status(201).send({ message: `Addres created`, data: newAddress });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllAddress = async (req, res, next) => {
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

export const getOneAddress = async (req, res, next) => {
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

export const updateAddress = async (req, res, next) => {
  try {
    const address = await addressModel.findByIdAndUpdate(
      req.params.id,
      req.body,
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

export const deleteAddress = async (req, res, next) => {
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
