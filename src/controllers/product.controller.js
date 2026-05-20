const productService =
require('../services/product.service')

const getProducts = async (req,res)=>{

 try{

  const products =
  await productService.getAll()

  res.json(products)

 }catch(error){

  res.status(500).json({
   error:error.message
  })

 }

}

const createProduct = async(req,res)=>{

 try{

  const {
   name,
   description,
   price,
   priceDetail,
   imageUrl,
   stock,
   active
  } = req.body

  const product =
  await productService.create({

   name,
   description,
   price,
   priceDetail,
   imageUrl,
   stock,
   active

  })

  res.status(201).json(product)

 }catch(error){

  res.status(500).json({
   error:error.message
  })

 }

}

const updateProduct =
async(req,res)=>{

 try{

 const {id} = req.params

 const product =
 await productService.update(
  id,
  req.body
 )

 res.json(product)

 }catch(error){

  res.status(500).json({
   error:error.message
  })

 }

}

const deleteProduct =
async(req,res)=>{

 try{

 const {id}=req.params

 await productService.delete(id)

 res.json({
  message:
  'Producto eliminado'
 })

 }catch(error){

 res.status(500).json({
  error:error.message
 })

 }

}

module.exports = {
getProducts,
createProduct,
updateProduct,
deleteProduct
}