import express from 'express'

const router = express.Router()


router.get("/test", (req, res) => {
  return res.json("hello test")
})

export default router;