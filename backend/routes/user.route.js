import express from 'express'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
const router = express.Router()

router.get("/create", (req, res) => res.send("create page"))
router.post("/create", async (req, res)=> {

  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const newUser = new User({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword
  })
  await newUser.save()

  return res.json({
    message:"oKE",
    newUser: newUser,
    code: 200
  })
})

router.get("/test", (req, res) => {
  return res.json("hello test")
})

export default router;