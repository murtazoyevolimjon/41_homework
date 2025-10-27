import paymentModel from "../models/payments.model.js";

export const createPayments = async (req, res, next) => {
  try {
    const createpayment = await paymentModel.create(req.body);
    res.status(201).send({ message: `Created payment`, data: createpayment });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllPayments = async (req, res, next) => {
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

export const getOnePayments = async (req, res, next) => {
  try {
    const getOnepayment = await paymentModel.findById(req.params.id);
    if (!getOnepayment) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from payment` });
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

export const updatePayments = async (req, res, next) => {
  try {
    const updatepayment = await paymentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatepayment) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from payment` });
    }
    res.status(200).json({ message: `Updated payment`, data: updatepayment });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deletePayments = async (req, res, next) => {
  try {
    const deletepayment = await paymentModel.findByIdAndDelete(req.params.id);
    if (!deletepayment) {
      return res
        .status(404)
        .json({ message: `not found ID ${req.params.id} from payment` });
    }
    res.status(200).json({ message: `deleted payment ` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
