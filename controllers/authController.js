const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//for register
const JWT_SECRET='sachin1234';
const registerController=async(req,res)=>{
    try{
        const User=await userModel.findOne({email:req.body.email});
        if(User){
            return res.status(200).send({
                success:false,
                message:"User Already exist",
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
          success: true,
          message: "User Registerd Successfully",
          user,
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error In Register API',
        })
    }
};

//login call back
const loginController = async(req, res) => {
    try {
      const User = await userModel.findOne({ email: req.body.email });
      if (!User) {
        return res.status(404).send({
          success: false,
          message: "Invalid Credentials",
        });
      }
      //compare password
      const comparePassword = await bcrypt.compare(req.body.password, User.password);
     
      if (User.role !== req.body.role) {
        return res.status(500).send({
          success: false,
          message: "role dosent match",
        });
      }
      
     // const comparePassword = await bcrypt.compare(req.body.password, User.password);
      if (!comparePassword) {
        return res.status(500).send({
          success: false,
          message: "Invalid Credentials",
        });
      }
      const token = jwt.sign({ userId: User._id }, JWT_SECRET, {expiresIn: "1d",});
      return res.status(200).send({
        success: true,
        message: "Login Successfully",
        token,
        User,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Login API",
        error,
      });
    }
  };
  const currentUserController = async (req, res) => {
    try {
      const user = await userModel.findOne({ _id: req.body.userId });
      return res.status(200).send({
        success: true,
        message: "User Fetched Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "unable to get current user",
        error,
      });
    }
  };
  
    

module.exports={registerController,loginController, currentUserController};