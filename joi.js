const joi = require("joi");

const userSchema = joi.object().keys({
  username: joi.string().min(3).max(10).required().messages({
    "string.base": "Kullanıcı adı string tipinde olmalıdır!",
    "string.required": "Kullanıcı adı olmak zorunda!",
    "string.min": "Kullanıcı adı çok kısa!"
  }),
  password: joi.string().min(5).max(15).required().messages({
    "string.base": "Şifre string tipinde olmalıdır!",
    "string.required": "Şifre olmak zorunda!",
    "string.min": "Şifre çok kısa!",
    "string.max": "Şifre çok uzun!"
  }),
  age: [
    joi.string(),
    joi.number()
  ]
});

const data = {
  username: "xx",
  age: 18,
  city: "istanbul"
};

const value = userSchema.validate(data, { abortEarly: false });

console.log(value.error);