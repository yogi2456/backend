import UserSchema from "../modals/user.schema.js";
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {
      const { name, email, password, confirmPassword } = req.body;
      if (!name || !email || !password || !confirmPassword) {
        return res
          .status(401)
          .json({ success: false, message: "All fields are required..." });
      }
      if (password !== confirmPassword) {
        return res
          .status(401)
          .json({ success: false, message: "password is not matched..." });
      }
      const isEmailExists = await UserSchema.findOne({ email: email });
      if (isEmailExists) {
        return res
          .status(401)
          .json({
            success: false,
            message: "Email is already exist, please use different email",
          });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log(hashedPassword, "pasjn");
  
      // 1st type to store data in mongodb
      // const newUser = await UserSchema.create({
      //   name: name,
      //   email: email,
      //   password: hashedPassword,
      // });
  
      // 2nd type to store data in mongodb
  
      const newUser = new UserSchema({
        name: name,
        email: email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      return res.status(200).json({ success: true, message: "Registration Succesfull..."})
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  };