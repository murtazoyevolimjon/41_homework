import customerModel from "../models/customers.model.js";
import delivery_staffModel from "../models/delivery_staff.model.js";
import { verifyToken, generateToken } from "../helper/jwt.js";
import config from "../config/index.js"
import { success } from "zod";

export const loginCustomer = async (req, res, next) => {
  try {
    const { name, phone } = req.validatedData;

    const data = await customerModel.findOne({ name, phone })
    if (!data) {
      return res.status(404).json({ success: false, message: "customer not found" })
    }

    const valid = await data.compare(name);
    if (!valid) {
      return res.status(400).json({ success: false, message: "name yoki phone xato" })
    }

    const payload = { id: data._id, name: data.name, phone: data.phone }
    const accessToken = await generateToken(payload, config.jwt.accessSecret, "30d")
    const refreshToken = await generateToken(payload, config.jwt.refreshSecret, "1h")

    data.accessToken = accessToken
    data.refreshToken = refreshToken
    await data.save()

    const { ...rest } = data.toObject();
    return res.status(200).json({
      success: true,
      message: "tizimga kirildi",
      data: rest,
    });
  } catch (error) {
    next(error)
  }
};




export const registerCustomer = async (req, res, next) => {
  try {
    const { name, phone } = req.validatedData;

    const existing = await customerModel.findOne({ name, phone });
    if (existing) {
      return res.status(400).json({ success: false, message: "name allaqachon bor" });
    }

    const newData = await customerModel.create(req.validatedData)
    const payload = { id: newData._id, name: newData.name, phone: newData.phone }

    const accessToken = await generateToken(payload, config.jwt.accessSecret, "30d")
    const refreshToken = await generateToken(payload, config.jwt.refreshSecret, "1h")

    newData.accessToken = accessToken
    newData.refreshToken = refreshToken
    await newData.save()

    const { ...rest } = newData.toObject()
    return res.status(201).json({
      success: true,
      message: "registared",
      data: rest,
    });
  } catch (error) {
    next(error)
  }
};


export const loginStaff = async (req, res, next) => {
  try {
    const { name, phone } = req.body

    const data = await delivery_staffModel.findOne({ name, phone })
    if (!data) {
      return res.status(404).json({ success: false, message: "staff not found" })
    }

    if (data.phone !== phone) {
      return res.status(400).json({ success: false, message: "name yoki phone xato" })
    }

    const payload = { id: data._id, name: data.name }
    const accessToken = await generateToken(payload, config.jwt.accessSecret, "30d")
    const refreshToken = await generateToken(payload, config.jwt.refreshSecret, "1h")

    data.accessToken = accessToken
    data.refreshToken = refreshToken
    await data.save()

    const { ...rest } = data.toObject()
    return res.status(200).json({
      success: true,
      message: "staffga kirildi",
      data: rest,
    })
  } catch (error) {
    next(error)
  }
};



export const registerStaff = async (req, res, next) => {
  try {
    const { name, phone } = req.validatedData;

    const existing = await delivery_staffModel.findOne({ name, phone });
    if (existing) {
      return res.status(400).json({ success: false, message: "staff allaqachon mavjud" });
    }

    const newData = await delivery_staffModel.create(req.validatedData)
    const payload = { id: newData._id, name: newData.name, phone: newData.phone }

    const accessToken = await generateToken(payload, config.jwt.accessSecret, "30d")
    const refreshToken = await generateToken(payload, config.jwt.refreshSecret, "1h")

    newData.accessToken = accessToken;
    newData.refreshToken = refreshToken;
    await newData.save()

    const { ...rest } = newData.toObject()
    return res.status(201).json({
      success: true,
      message: "staff registared",
      data: rest,
    });
  } catch (error) {
    next(error);
  }
};


export const profileCustomer = async (req, res) => {
  return res.status(200).json({ success: true, data: req.user })
};

export const profileStaff = async (req, res) => {
  return res.status(200).json({ success: true, data: req.user })
};


export const refreshAccessCustomer = async (req, res, next) => {
  try {
    const { refreshToken } = req.validatedData
    const verified = verifyToken(refreshToken, config.jwt.refreshSecret)

    const user = await customerModel.findById(verified.id)
    if (!user) return res.status(404).json({ success: false, message: "User not found" })

    const payload = { id: user._id, name: user.name };
    const accessToken = await generateToken(payload, config.jwt.accessSecret, "1h")

    return res.status(200).json({ success: true, accessToken })
  } catch (error) {
    next(error)
  }
};

export const refreshAccessStaff = async (req, res, next) => {
  try {
    const { refreshToken } = req.validatedData
    let verified
    try {
      verified = verifyToken(refreshToken, config.jwt.refreshSecret)
    } catch(error) {
      return res.status(403).json({success: false, message: `Token muddati tugagan`})
      
    }
    const user = await delivery_staffModel.findById(verified.id)
    if (!user) return res.status(404).json({ success: false, message: "User not found" })

    const payload = { id: user._id, name: user.name }
    const accessToken = await generateToken(payload, config.jwt.accessSecret, "1h")

    return res.status(200).json({ success: true, accessToken })
  } catch (error) {
    next(error)
  }
}