import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
class authController
{
    static userRegistration = async (req,res) => {
        const {name,email,password} = req.body;
        try{
            if(name && email && password)
            {
                const isUser = await authModel.findOne({email: email});
                if(isUser){
                    return res.status(400).json({"message": "User Already Exists"});
                }
                else{
                    //Password Hashing
                    const genSalt=await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password,genSalt);

                    //save the user

                    const newUser = authModel({
                        name:name,
                        email:email,
                        password: hashedPassword,
                    })
                    const resUser = await newUser.save();
                     if(resUser){
                        return res.status(200).json({message: "Resister Succesfully", user:resUser});
                     }
                }
            } else{
                return res.status(400).json({message: "all fields are required"});
            }
        } catch {
            return res.status(400).json({message: "error.message"})
        }
    }
}

export default authController;