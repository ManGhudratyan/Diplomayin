const router = require("express").Router();
const userRoute = require("./users");
const User = require('../models/User');
router.use("/api/users", userRoute);
router.get('/', async (req, res, next)=>{
  try{
    // TODO get some data from DB
    const user = await User.findOne();
  res.status(200).json({
    status:'success',
    user
  })
  }catch(e){
    next(e)
  }
})

module.exports=router;
