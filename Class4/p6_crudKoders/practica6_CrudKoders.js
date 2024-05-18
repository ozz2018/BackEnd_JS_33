const fs = require('fs')
const dataBaseKoders= 'kodersList.json'

function init () {
    const fileExists= fs.existsSync(dataBaseKoders)
    if(!fileExists){
        fs.writeFileSync(dataBaseKoders,JSON.stringify({koders:[]})) 
    }
}


function getKoders (){
    const content= fs.readFileSync(dataBaseKoders, 'utf8')
    return JSON.parse(content).koders
}

function updateKoders (kodersArray){
    const newKodersList = {koders : kodersArray}
    const newKoderString = JSON.stringify(newKodersList)
    fs.writeFileSync(dataBaseKoders,newKoderString)
}

function addKoders (koder){
    const kodersArray = getKoders()
    kodersArray.push(koder)
    updateKoders(kodersArray)
}

function removeKoders(koderIdx){
    const kodersArray= getKoders()
    kodersArray.splice(koderIdx,1)
    updateKoders(kodersArray)
}

function listKoders(){
    const kodersArray = getKoders()
    if(!kodersArray.length){
        console.log('No hay koders en lista')
        process.exit(0)
    }
    kodersArray.forEach((koder, idx) => {
        console.log(idx,'=>', koder)
    });
}

function resetKoders (){
    updateKoders([])
}

function main(){
    const command= process.argv[2]
    const argument = process.argv[3]
    init()
    if(command.toLowerCase() ==='ls'){
        listKoders()
    }else if(command.toLowerCase() === 'add'){
        if (!argument){
            console.log('No hay información por agregar new Kod3r')
            process.exit(1)
        }
        addKoders(argument)
            console.log(argument)
        
        console.log('Koder Agregado con Éxito')
        listKoders()
    }else if ( command.toLowerCase() === "rm") {
        if (!argument) {
            console.error("No seleccionaste a quien eliminar")
            process.exit(1)
        }
        const koderIdx = parseInt(argument);

        if (isNaN(koderIdx)) {
            console.error("Esto no es una posición valida 🤨");
            process.exit(1)
        }
        
        const kodersArray = getKoders();

        if ( koderIdx < 0 || koderIdx >= kodersArray.length) {
            console.error("Es una posición no valida ")
            process.exit(1)
        }

        removeKoders (koderIdx);
        listKoders ()
        console.log(`Koder: ${koderIdx} fue eliminado 😵`);
    } else if ( command.toLowerCase() === "reset") {
        reset();
        console.log("La lista fue Eliminada");
    } else {
        console.error("Comando invalido", command)
    }
}
main()