const e = require("express")
const db= require("./db")

function add(newKoder){

    if(!newKoder.name)              throw new Error('name is required')
    
    newKoder.generation=parseInt(newKoder.generation)
    if(!newKoder.generation)        throw new Error('generation is required')
    if(isNaN(newKoder.generation))  throw new Error('generation must be a number')
    if(newKoder.generation<=0)      throw new Error('generation is invalid')
    
    //if(newKoder.gender.toLowerCase != 'm' &&
    //newKoder.gender.toLowerCase != 'f' )      throw new Error('only m or f are accepted')
    if(!newKoder.gender)            throw new Error('Gender is required')
    if(!['f','m'].includes(newKoder.gender.toLowerCase()))  throw new Error('only m or f are accepted')
    
    newKoder.age= parseInt(newKoder.age)  
    if(!newKoder.age)               throw new Error('age is required')
    if(isNaN(newKoder.age))         throw new Error('age is invalid')
    if(newKoder.age<=0)              throw new Error('age must be greater than 0')
    if(typeof newKoder.isActive !== 'boolean')   throw new Error('isActive must be  a boolean')


const dbData = db.read()

dbData.koders.push(newKoder)

db.write(dbData)
return dbData.koders
}

function getAll(){
    return db.read().koders
}

function deleteAll(){
    const dbData = db.read()
    dbData.koders=[]
    db.write([dbData])
    return dbData.koders
}

function deleteByName(name){
    if(!name)           throw new Error ( 'name is required to delete')
    const dbData= db.read()

    dbData.koders.filter((koder)=>koder.name !==name)

    db.write(dbData)
    return dbData.koders
}


module.exports = {
    add:add,
    deleteAll,
    deleteByName,
    getAll,
}