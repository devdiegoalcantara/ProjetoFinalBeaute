import bcrypt from 'bcrypt';

const hashPassword = async function (next) {
  if (this.isModified('senha') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.senha = await bcrypt.hash(this.senha, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
};

export default hashPassword;
