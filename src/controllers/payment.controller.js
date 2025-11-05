import paymentModel from "../models/payment.model.js";

export const create = async (req, res, next) => {
  try {
    const createpayment = await paymentModel.create(req.validatedData);
    res.status(201).send({ message: `Created payment`, data: createpayment });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const getAllpayment = await paymentModel.find();
    res.status(200).json({
      message: `found all payment`,
      count: getAllpayment.length,
      data: getAllpayment,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const getOnepayment = await paymentModel.findById(req.params.id);
    if (!getOnepayment) {
      return res.status(404).json({ message: `not found ID ${req.params.id} from payment` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from payment`,
      data: getOnepayment,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updatepayment = await paymentModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatepayment) {
      return res.status(404).json({ message: `not found ID ${req.params.id} from payment` });
    }
    res.status(200).json({ message: `Updated payment`, data: updatepayment });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const deletepayment = await paymentModel.findByIdAndDelete(req.params.id);
    if (!deletepayment) {
      return res.status(404).json({ message: `not found ID ${req.params.id} from payment` });
    }
    res.status(200).json({ message: `deleted payment ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
