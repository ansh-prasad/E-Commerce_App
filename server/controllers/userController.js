import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, country, phone } =
      req.body;

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
