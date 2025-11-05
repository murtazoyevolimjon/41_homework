import DeliveryStaffModel from "../models/delivery_staff.model.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../helper/node_mailer.js";
import { generateAccessToken, generateRefreshToken, verifyToken } from "../helper/jwt.js";
import crypto from "crypto";
import { config } from "../config/db.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, role, district_id, vehicle_number } = req.validatedData

    const existing = await DeliveryStaffModel.findOne({ email })

    if (existing) {
      if (existing.isVerified) {
        return res.status(400).json({
          message: "Bu email allaqachon ro'yxatdan o'tgan va tasdiqlangan.",
        });
      } else {
        const newOtp = crypto.randomInt(100000, 999999).toString()
        const otpExpiresAt = Date.now() + 10 * 60 * 1000

        existing.otp = newOtp
        existing.otpExpiresAt = otpExpiresAt
        await existing.save()

        await sendEmail(
          email,
          "Yangi tasdiqlash kodi",
          `Sizning yangi tasdiqlash kodingiz: ${newOtp} (10 daqiqa amal qiladi)`
        );

        return res.status(200).json({
          message: "Siz avval ro'yxatdan o'tgansiz, lekin email tasdiqlanmagan. Yangi tasdiqlash kodi emailingizga yuborildi.",
        })
      }
    }

    const otp = crypto.randomInt(100000, 999999).toString()
    const otpExpiresAt = Date.now() + 10 * 60 * 1000

    const user = await DeliveryStaffModel.create({
      name,
      email,
      password,
      phone,
      role,
      district_id,
      vehicle_number,
      otp,
      otpExpiresAt,
    });

    await sendEmail(
      email,
      "Email tasdiqlash kodi",
      `Sizning tasdiqlash kodingiz: ${otp} (10 daqiqa amal qiladi)`
    );

    res.status(201).json({
      message: "Foydalanuvchi yaratildi. Tasdiqlash kodi emailingizga yuborildi.",
    });
  } catch (error) {
    next(error)
  }
}


export const verifyOtp = async (req, res, next) => {
  try {
    const { email, code } = req.body

    const user = await DeliveryStaffModel.findOne({ email })
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" })

    if (user.isVerified)
      return res.status(400).json({ message: "Hisob allaqachon tasdiqlangan" })

    if (String(user.otp) !== String(code))
      return res.status(400).json({ message: "Kod noto'g'ri" })

    if (user.otpExpiresAt < Date.now())
      return res.status(400).json({ message: "Kod muddati tugagan" })

    user.isVerified = true
    user.otp = null     
    user.otpExpiresAt = null
    await user.save()

    res.status(200).json({ message: "Email muvaffaqiyatli tasdiqlandi" })
  } catch (error) {
    next(error)
  }
}


export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await DeliveryStaffModel.findOne({ email })
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" })

    if (!user.isVerified)
      return res.status(403).json({ message: "Hisob tasdiqlanmagan. Avval emailni tasdiqlang." })

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Email yoki parol xato" })

    const accessToken = generateAccessToken({ id: user._id, role: user.role })
    const refreshToken = generateRefreshToken({ id: user._id })

    user.accessToken = accessToken
    user.refreshToken = refreshToken
    await user.save()

    res.status(200).json({
      message: "Kirish muvaffaqiyatli",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error)
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken)
      return res.status(400).json({ message: "Refresh token kerak" })

    const decoded = verifyToken(refreshToken, config.jwt.refreshSecret)
    const user = await DeliveryStaffModel.findById(decoded.id)
    if (!user || user.refreshToken !== refreshToken)
      return res.status(403).json({ message: "Noto'g'ri token" })

    const newAccess = generateAccessToken({ id: user._id, role: user.role })
    user.accessToken = newAccess
    await user.save()

    res.status(200).json({ message: "Access token yangilandi", accessToken: newAccess })
  } catch (error) {
    next(error)
  }
};

export const profile = async (req, res, next) => {
  try {
    const user = await DeliveryStaffModel.findById(req.user.id).select("-password")
    res.status(200).json({ message: "Profil ma'lumotlari", data: user })
  } catch (error) {
    next(error)
  }
}

export const getAll = async (req, res, next) => {
  try {
    const users = await DeliveryStaffModel.find()
    res.status(200).json({
      message: "Barcha foydalanuvchilar",
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export const deleted = async (req, res, next) => {
  try {
    const deleteCustomer = await DeliveryStaffModel.findByIdAndDelete(req.params.id)
    if (!deleteCustomer) {
      return res.status(404).json({ message: `not found ID ${req.params.id} from deliceery_staff` })
    }
    res.status(200).json({ message: `deleted delivery_staff` })
  } catch (error) {
    console.log(error)
    next(error)
  }
}


export const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, email, phone, password, role } = req.body

    const user = await DeliveryStaffModel.findById(id)
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" })

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10)
      user.password = hashedPassword
    }

    if (name) user.name = name
    if (email) user.email = email
    if (phone) user.phone = phone
    if (role) user.role = role

    await user.save()

    res.status(200).json({ message: "Foydalanuvchi ma'lumotlari yangilandi" })
  } catch (error) {
    next(error)
  }
}

export const getOne = async (req, res, next) => {
  try {
    const getOneDistrict = await DeliveryStaffModel.findById(req.params.id)
    if (!getOneDistrict) {
      return res.status(404).json({ message: `not found ID ${req.params.id} from delivery_staff` });
    }
    res.status(200).json({
      message: `found ID ${req.params.id} from delivery_staff`,
      data: getOneDistrict,
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}


export const create = async (req, res, next) => {
  try {
    const createpayment = await DeliveryStaffModel.create(req.validatedData)
    res.status(201).send({ message: `Created delivery_staff`, data: createpayment })
  } catch (error) {
    console.log(error)
    next(error)
  }
}