import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0//", salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(201).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
    try {
     const user = await User.findOne({username : req.body.username})
     console.log(user)
    //  console.log(req.body.username, user.username)
     if(!user) return next(createError(404, "User not found!"))

     const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

    // const isPasswordCorrect =  bcrypt.compare(req.body.password, user.password, function(err, res) {

    //     if(err){
    //         console.log(err)
    //         return next(createError(400, "Wrong password or username!"))
    //     }

    // });
     console.log(isPasswordCorrect)
     if(!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))
    res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };
