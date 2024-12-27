import UserModel from "../Model/User";

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    userExists
      ? res.status(400).json({
          message: `User with this email already exists`,
        })
      : await UserModel.create({ name, email, password });
    res.status(201).json({
      message: `User registered successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default registerController;
