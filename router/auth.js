const router = require("express").Router()
const People = require("../model/users")
const Nodemailer = require("./component/nodemailer")
    
router.get("/allUser",async(req,res)=>{
    const users = await People.find()
    res.json(users)
})

router.post("/register",async(req,res)=>{
    // const email = req.body.email
    // const user = People.findOne({email:email})
    // if(user){
    //     res.json("bu emaildan oldin foydalanilgan")
    // }else{
        const newUser = new People({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const person = await newUser.save()
        res.json(person)
    // }
})

router.post("/login",async(req,res)=>{
    const email = req.body.email
    const user = People.findOne({email:req.body.email})
    if(user){
        if(user.password === req.body.password){
            res.json(user)
        }else{
            res.json("password hato")
        }
    }else{
        res.json("bunday foydalanuvchi emaili mavjud ema")
    }
})

router.post("/forget",async(req,res)=>{
    const email = req.body.email
    const user = await People({email:email})
    if(user){
        let password = Nodemailer(email)
        res.json(password).end
    }else{
        res.json("bunday email mavjud emas").end
    }
})


module.exports = router