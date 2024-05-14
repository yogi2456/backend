import UserSchema from "../modals/user.schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {
      const { name, email, password, confirmPassword, role } = req.body.userData;
      if (!name || !email || !password || !confirmPassword || !role) {
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
        role: role
      });
  
      await newUser.save();
  
      return res.status(200).json({ success: true, message: "Registration Succesfull..."})
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  };


  export const Login = async (req, res) => {
    try {
      const { email, password } = req.body.userData;
      if(!email || !password) {
          return res.status(401).json({ success: false, message: "All fields are required..."})
      }
  
      const user = await UserSchema.findOne({ email: email});
      if(!user) {
          return res.status(401).json({ success: false, message: "user is not exist, please check the email..."})
      }
  
      const isPassword = await bcrypt.compare(password, user.password);
      // console.log(isPassword, "=pass")
  
      if(!isPassword) {
          return res.status(401).json({success: false, message: "Password is wrong..."})
      }
  
      const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET )
      // console.log(token, "token")   { expiresIn: 100}
  
      res.cookie("token", token);
  
      return res.status(200).json({ success: true, message: "Login Succesfull...", userData: {name: user.name, email: user.email, role: user.role},})
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error});
    }
  };
  
  
 
      // const decodedData = await jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      //   if(err) {
      //     return "token expired";
      //   }
      //   return res;
      // });
      // console.log(decodedData);
  
      // if(decodedData == "token expired") {
      //   return res.send({ success: false, message: "token expired."})
      // }
      
      
  
      // const expireTime = Math.floor(Date.now()/ 1000);
      // if(!decodedData.exp < expireTime) {
      //   return res.json({ success: false, message: "Token Expired"})
      // }
  
      export const validateToken = async (req, res) => {
        try {
          const token = req?.cookies?.token;
          if (!token) {
            return res.json({
              success: false,
              message: "Token not found.",
            });
          }
          const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
          // console.log(decodedData);
          if (!decodedData.id) {
            return res.json({
              success: false,
              message: "Token is expired.",
            });
          }
      
          const user = await UserSchema.findById(decodedData.id);
      
          // console.log(user);
          if (!user) {
            return res.json({
              success: false,
              message: "Token is not valid.",
            });
          }
      
          return res.json({ user, success: true });
        } catch (error) {
          console.log(error, "error");
          return res.json({ error, success: false });
        }
      };
  