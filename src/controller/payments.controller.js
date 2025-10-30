import Payment from "../model/paymentsModel.js";
export const create = async (req, res, next) => {
  try {
    const payment = await Payment.find();
    res.send({ message: payment });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = await Payment.find({ id });
    res.send({ message: payment });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const payment = await Payment.create(req.body);
    res.send({ message: payment });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Payment updated successfully!",
      data: updatedPayment,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = await Payment.deleteOne(id);
    if (payment.deletedCount === 0) {
      return res.status(404).json({ message: "Payment is not found" });
    }
    res.send({ message: payment });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
