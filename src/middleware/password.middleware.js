import bcrypt from "bcrypt";

export async function hashPasswordBeforeSave(next) {
  if (!this.isModified("password")) return next()

  try {
    const hashed = await bcrypt.hash(this.password, 10)
    this.password = hashed
    next()
  } catch (error) {
    next(error)
  }
}

export async function hashPasswordBeforeUpdate(next) {
  const update = this.getUpdate()
  if (!update?.password) return next()
  console.log("Hashdan oldin:", this.password)

  try {
    const hashed = await bcrypt.hash(update.password, 10)
    this.getUpdate().password = hashed
    next()
  } catch (error) {
    next(error)
  }
}

export async function comparePasswords(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword)
}