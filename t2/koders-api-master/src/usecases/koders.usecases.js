/* eslint-disable */
//solo los casos de uso se pueden comunicar con las entidades(modelos)

//modelos siempre con la primera letra mayus
// const kodersModel = require('../models/koders.model')
const Koder = require('../models/koders.model')
const encript = require('../lib/encrypt')
const createErrors = require('http-errors')

async function create(koderData){ //se vuelve una promesa
    //validacion para crear koders no repetidos
    const koderFound = await Koder.findOne({ email: koderData.email })

    if(koderFound){
        // throw new Error("Email already in use")
        throw createErrors(409,"Email already in use")
    }

    //reemplazamos y encriptamos nuestra pass / encript nos regresa una promesa

    koderData.password = await encript.encrypt(koderData.password)

    //le indicamos que espere que se resuelva la promesa
    //para ocupar el await siempreeeee debe contener el asyn sobre la funcion
    const newKoder = await Koder.create(koderData)

    return newKoder
}
//modelo sirve para crear o consultar info
async function getAll(){

    //find regresa un query que es una promesa de igual manera
    const allKoders = await Koder.find.populate("generation")

    return allKoders
}

async function getById(id){
    const koder = await Koder.findById(id).populate("generation")
    return koder
}

async function deleteById(id){
    const koderDeleted = await Koder.findByIdAndDelete(id)
    return koderDeleted
}

async function UpdateById(id, newKoderData){
    //hay que decirle que nos regrese el koder actualizado mediante un tercer parametro par configurar
    const updateKoder = await Koder.findByIdAndUpdate(id, newKoderData, {
        new: true,
    })

    return updateKoder
}

module.exports = {create, getAll, getById, deleteById, UpdateById}

