const router = require("express").Router();
const userRoute = require("./users");

router.use("/api/users", userRoute);
router.get('/', (req, res, next)=>{
  try{
    // TODO get some data from DB
  res.status(200).json({
    status:'success',
  })
  }catch(e){
    next(e)
  }
})

module.exports=router;
