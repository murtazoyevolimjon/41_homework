import waterProductModel from "../models/water_product.model.js";

export const create = async (req, res, next) => {
  try {
    const createdProduct = await waterProductModel.create(req.validatedData);
    res.status(201).json({
      success: true,
      message: "Suv mahsuloti yaratildi",
      data: createdProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await waterProductModel.find().skip(skip).limit(limit);
    const total = await waterProductModel.countDocuments();

    res.status(200).json({
      success: true,
      message: "Barcha suv mahsulotlari topildi",
      page,
      total,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const product = await waterProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: `ID ${req.params.id} bo'yicha mahsulot topilmadi`,
      });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updatedProduct = await waterProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({
        message: `ID ${req.params.id} bo'yicha mahsulot topilmadi`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Mahsulot yangilandi",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const deleted = async (req, res, next) => {
  try {
    const deletedProduct = await waterProductModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        message: `ID ${req.params.id} bo'yicha mahsulot topilmadi`,
      });
    }
    res.status(200).json({ success: true, message: "Mahsulot o'chirildi" });
  } catch (error) {
    next(error);
  }
};
