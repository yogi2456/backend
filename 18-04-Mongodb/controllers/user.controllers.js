import UserSchema from "../modals/user.schema.js";

export const Register = async (req, res) => {
  try {
    const { name, email, password, confirmpassword, age } = req.body;
    if (!name || !email || !password || !confirmpassword || !age) {
      return res
        .status(401)
        .json({ success: false, message: "All fields are required" });
    }

    const user = new UserSchema({
      name: name,
      email: email,
      password,
      confirmpassword,
      age,
    });
    console.log("user", user);

    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "Registration Successful" });
    fdd;
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

export const GetUsers = async (req, res) => {
  try {
    const users = await UserSchema.find({ age: { $eq: 20 } });

    if (users) {
      console.log("users", users);
      return res
        .status(201)
        .json({ success: true, message: "users found", users: users });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "users not found" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
