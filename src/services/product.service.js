const prisma = require('../config/prisma')

exports.create = async (data) => {
 return prisma.product.create({
   data
 })
}

exports.getAll = async () => {
 return prisma.product.findMany({
   orderBy:{
     createdAt:'desc'
   }
 })
}

exports.update = async (id,data)=>{

 return prisma.product.update({

  where:{
   id:Number(id)
  },

  data

 })

}

exports.delete = async(id)=>{

 return prisma.product.delete({

  where:{
   id:Number(id)
  }

 })

}