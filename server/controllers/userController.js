import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, country, phone } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !city ||
      !address ||
      !country ||
      !phone
    ) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const exisitingUSer = await userModel.findOne({ email });
    //validation
    if (exisitingUSer) {
      return res.status(500).send({
        success: false,
        message: "Email Already Taken",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "Registeration Success, please login",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Add Email OR Password",
      });
    }

    const user = await userModel.findOne({ email });
    //user valdiation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }

    const isMatch = await user.comparePassword(password);
    //valdiation pass
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login Successfully",

      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: "false",
      message: "Error In Login Api",
      error,
    });
  }
};
