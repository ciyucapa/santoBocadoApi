const admin =
require('../config/firebase')

const authMiddleware =
async(req,res,next)=>{

 try{

  const authHeader =
  req.headers.authorization

  if(!authHeader){

   return res
   .status(401)
   .json({
    error:'No autorizado'
   })

  }

  const token =
  authHeader.replace(
   'Bearer ',
   ''
  )

  const decoded =
  await admin
  .auth()
  .verifyIdToken(token)

  req.user = decoded

  next()

 }catch(error){

  console.log(error)

  return res
  .status(401)
  .json({
   error:'Token inválido'
  })

 }

}

module.exports =
authMiddleware