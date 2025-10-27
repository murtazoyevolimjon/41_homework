import jwt from 'jsonwebtoken';


export const generateToken = (payload, secret, expiresIn) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn }, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null
  }
};