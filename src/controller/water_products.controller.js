import Water_product from "../model/water_productsModel.js";
export const getWater_products = async (req, res, next) => {
  try {
    const water_product = await Water_product.find();
    res.send({ message: water_product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const getOneWater_product = async (req, res, next) => {
  try {
    const { id } = req.params;
    const water_product = await Water_product.find({ id });
    res.send({ message: water_product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addWater_product = async (req, res, next) => {
  try {
    const water_product = await Water_product.create(req.body);
    res.send({ message: water_product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const updateWater_product = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedWaterProduct = await Water_product.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true },
    );

    if (!updatedWaterProduct) {
      return res.status(404).json({ message: "Water product not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Water product updated successfully!",
      data: updatedWaterProduct,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteWater_product = async (req, res, next) => {
  try {
    const { id } = req.params;
    const water_product = await Water_product.deleteOne(id);
    if (water_product.deletedCount === 0) {
      return res.status(404).json({ message: "Water_product is not found" });
    }
    res.send({ message: water_product });
  } catch (err) {
    console.log(err);
    next(err);
  }
};