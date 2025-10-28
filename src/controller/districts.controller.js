import District from "../model/districtsModel.js";
export const getDistricts = async (req, res, next) => {
  try {
    const district = await District.find();
    res.send({ message: district });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const getOneDistrict = async (req, res, next) => {
  try {
    const { id } = req.params;
    const district = await District.find({ id });
    res.send({ message: district });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const addDistrict = async (req, res, next) => {
  try {
    const district = await District.create(req.body);
    res.send({ message: district });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const updateDistrict = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const district = await District.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!district) {
      return res.status(404).json({ message: "District topilmadi!" });
    }

    res.json({
      success: true,
      message: "Yangilandi",
      district,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const deleteDistrict = async (req, res, next) => {
  try {
    const { id } = req.params;
    const district = await District.deleteOne(id);
    if (district.deletedCount === 0) {
      return res.status(404).json({ message: "District is not found" });
    }
    res.send({ message: district });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
