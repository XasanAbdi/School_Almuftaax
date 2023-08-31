import Users from "../models/UserModels.js";
import generateToken from "../utilits/generateToken.js";


export const register=async(req,res)=>{
    const{name,email,password,phone,address}=req.body;

    const userExists=Users.findOne({email})
    if (userExists) {
        res.status(400).json({message:'user already exists'})
        
    }
    else{
        const user=Users.create({
            name,email,password,phone,address
        })
        if (user) {
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password,
                phone:user.phone,
                address:user.address,
                token:generateToken(user._id)

            })
            
        }else{
        res.status(400).json({message:'invalid user data'})

        }
    }
}

export const login=async(req,res)=>{
    const user=Users.findOne({email})
    if (user && password==user.password) {
        res.status(200).json({
            _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password,
                phone:user.phone,
                address:user.address,
                token:generateToken(user._id)

        })
    }else{
        res.status(400).json({message:'invalid email or password'})

    }
}