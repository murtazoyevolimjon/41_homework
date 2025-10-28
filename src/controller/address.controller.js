import Address from "../model/addressModel.js";

export const getAddress = async (req, res, next) => {
  try {
    const address = await Address.find();
    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};

export const getOneAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);

    if (!address) {
      return res.status(404).json({ message: "Address topilmadi!" });
    }

    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};

export const addAddress = async (req, res, next) => {
  try {
    const address = await Address.create(req.body);
    res.status(201).json(address);
  } catch (err) {
    next(err);
  }
};

export const updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const address = await Address.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!address) {
      return res.status(404).json({ message: "Address topilmadi!" });
    }

    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};

export const deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const address = await Address.findByIdAndDelete(id);

    if (!address) {
      return res.status(404).json({ message: "Address topilmadi!" });
    }

    res.status(200).json({ message: "O'chirildi" });
  } catch (err) {
    next(err);
  }
};
