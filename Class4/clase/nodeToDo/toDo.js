/*//
 todo Add  '10 wash the bike'           - agrega tarea en la lista
 todo done '10 wash the bike'           - quitar de la lista
 todo ls   Listar                       - ver tareas pendientes
 toDo alv                               - reset

 need         
    file .json
    funtion for each command
    use process argv 
    use fs for crud
*/
const fs = require ('fs')
const { parse } = require('path')
const argument = 0

const dbFile = toDoDB.json

function init (){
    //velidar si existe - crear archivoo de base de datos
    const fileExists = fs.existsSync(dbFile)
    if (!fileExists){
        fs.writeFileSync(dbFile, JSON.stringify({toDos:[]}))
    }
}

function getToDos(){
    //leer archivo
    fs.readFileSync(dbFile, 'utf8')
    return JSON.parse(content)
}

function updateToDos(toDos) {
    const newToDos= { toDos : toDos}
    const newToDosAsString = JSON.stringify(newToDos)
    fs.writeFileSync(dbFile,  newToDosAsString)

}

function addTask (task){
    const toDos = getToDos()
    toDos.push(task)
    updateToDos(toDos)
}

function doneTask (taskIndex){
    const toDos = getToDos()
    toDos.splice(taskIndex,1)    
    updateToDos(toDos)
    //leer el archivo
        //update
}

function lsTasks(){
    //leer el archivo
    const toDos = getToDos()
if(!toDos.length){ 
    console.log('esta vacio')
}

toDos.forEach((task , idx)=> {
    console.log(idx, '.', task)
});
}


function alv (){
    updateToDos([])
}

function main(){
    const command=  process.argv[2]
    const argument= process.argv[3]

    init()
    if(command==='ls'){
        lsTasks()
    }else if (command==='add'){
            if (!argument){
                console.error('missing task')
                process.exit(1)
            }
        addTask(argument)
        lsTasks()
        console.log('task added')
    }else if (command==='done'){
        if (!argument){
                console.error('missing task')
                process.exit(1)
        }
        const idx = parse(argument)
        if (isNaN(idx)){
            console.error('missing task')
            process.exit(1)
        }
        const toDos = getToDos()
        if(idx <0 || idx >=toDos.length){
            console.error('missing task')
            process.exit(1)
        }
        doneTask()
        ls()
        console.log('task completed')
    }else if (command==='alv'){
        alv()
        console.log('Algo lingo Vendra')
    }else {
        console.log('invalid')
        process.exit(1)

    }


}
main()
