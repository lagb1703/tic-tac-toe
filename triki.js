function imprimir(str){
    process.stdout.write(str)
}

function input(str, tipo){
    const readline = require('readline-sync');
    switch(tipo){
        case "float":
            return parseInt(readline.question(str));
        case "number":
            return parseFloat(readline.question(str));
        case "char":
            return readline.question(str)[0 ];
        default:
            return readline.question(str);
    }
}

function no_triki(...data){
    if(typeof(data[0]) == "number" || typeof(data[1]) == "number" || typeof(data[2]) == "number" ){
        return (data[0] == data[1] || data[1] == data[2] || data[0] == data[1]);
    }
    return true;
}

function triki(...data){
    return (data[0] == data[1] && data[1] == data[2]);
}

function derrota(array){
    return (no_triki(array[0], array[1], array[2]) 
        && no_triki(array[3], array[4], array[5]) 
        && no_triki(array[6], array[7], array[8]) 
        && no_triki(array[0], array[3], array[6]) 
        && no_triki(array[1], array[4], array[7]) 
        && no_triki(array[2], array[5], array[8]) 
        && no_triki(array[0], array[4], array[8]) 
        && no_triki(array[2], array[4], array[6]));
}

function victoria(array){
    return triki(array[0], array[1], array[2]) 
        || triki(array[3], array[4], array[5]) 
        || triki(array[6], array[7], array[8]) 
        || triki(array[0], array[3], array[6]) 
        || triki(array[1], array[4], array[7]) 
        || triki(array[2], array[5], array[8]) 
        || triki(array[0], array[4], array[8]) 
        || triki(array[2], array[4], array[6]);
}

function mover(array, movimiento){
    if(movimiento < 10){
        if(typeof(array[movimiento]) == "number"){
            return true;
        }
    }
    return false;
}

function graficar(array){
    array.map((n1, n2)=>{
        imprimir(n1.toString())
        if(n2 == 2 || n2 == 5 || n2 == 8){
            console.log("")
            if(n2 != 8){
                console.log("---------")
            }
        }else{
            imprimir(" | ")
        }
    });
}

function juego(array, turno) {
    if(!victoria(array)){
        if(!derrota(array)){
            return true;
        }else{
            console.log("Ningun movimiento valido para ganar. Empate epico!!!!!")
        }
    }else{
        let s = (turno%2 == 0)?"1":"2";
        console.log("Victoria magistral del jugador " + s + " en el turno " + turno + "...")
    }
    return false;
}

function buscar(letra, ...data){
    if(data[0] == data[1] && data[0] == letra){
        return data[2];
    }else if(data[0] == data[2] && data[0] == letra){
        return data[1];
    }else if(data[1] == data[2] && data[1] == letra){
        return data[0];
    }
    return -1;
}

function IA(array){
    let mov = 0;
    let j = [[array[0], array[1], array[2]]
            , [array[3], array[4], array[5]]
            , [array[6], array[7], array[8]]
            , [array[0], array[4], array[8]]
            , [array[2], array[4], array[6]]
            , [array[0], array[3], array[6]]
            , [array[1], array[4], array[7]]
            , [array[2], array[5], array[8]]];
    j.map((array)=>{
        if(buscar("R", array[0], array[1], array[2]) != -1){
            mov = buscar("R", array[0], array[1], array[2]);
        }
    })
    return mov;
}

function bucle(array, turno, fichas = ["*", "+"]){
    console.log("")
    graficar(array);
    if(juego(array, turno)){
        let m = 0;
        if(fichas[turno%2] == "R"){
            m = 1;
        }else{
            m = input("Ingrese el numero al cual jugara: ", "number");
        }
        if(mover(array, m-1)){
            array[m-1] = (turno%2 == 0)?fichas[0]:fichas[1];
        }else{
            console.log("Movimiento no valido");
        }
        bucle(array, turno + 1, fichas);
    }
    return;
}

function conf(){
    let tablero = [1,2,3,4,5,6,7,8,9];
    let fichas;
    console.log("¿Quieres configuracion avansada?(y/n)");
    if(input("", "str").toLowerCase() == "y"){
        fichas = []
        if(input("¿Quieres activar la IA?(y/n)\n", "str").toLowerCase() == "y"){
            if(Math.random().toFixed(2) < 0.5){
                fichas.push("R");
                let letra = input("Elija el simbolo de combate: ", "str");
                fichas.push((letra[0] == "R")?"r":letra[0]);
            }else{
                
            }
        }else if(input("¿Quieres cambiar los simbolos?(y/n)\n", "str").toLowerCase() == "y"){
            let letra = input("Jugador 1: ", "str");
            fichas.push((letra[0] == "R")?"r":letra[0]);
            letra = input("Jugador 2: ", "str");
            fichas.push((letra[0] == "R")?"r":letra[0]);
        }else{
            fichas = ["*", "+"]
        }
    }
    bucle(tablero, 0, fichas);
}
//conf();
function imprimir(str){
    process.stdout.write(str)
}

function input(str, tipo){
    const readline = require('readline-sync');
    switch(tipo){
        case "float":
            return parseInt(readline.question(str));
        case "number":
            return parseFloat(readline.question(str));
        case "char":
            return readline.question(str)[0 ];
        default:
            return readline.question(str);
    }
}

function no_triki(...data){
    if(typeof(data[0]) == "number" || typeof(data[1]) == "number" || typeof(data[2]) == "number" ){
        return (data[0] == data[1] || data[1] == data[2] || data[0] == data[1]);
    }
    return true;
}

function triki(...data){
    return (data[0] == data[1] && data[1] == data[2]);
}

function derrota(array){
    return (no_triki(array[0], array[1], array[2]) 
        && no_triki(array[3], array[4], array[5]) 
        && no_triki(array[6], array[7], array[8]) 
        && no_triki(array[0], array[3], array[6]) 
        && no_triki(array[1], array[4], array[7]) 
        && no_triki(array[2], array[5], array[8]) 
        && no_triki(array[0], array[4], array[8]) 
        && no_triki(array[2], array[4], array[6]));
}

function victoria(array){
    return triki(array[0], array[1], array[2]) 
        || triki(array[3], array[4], array[5]) 
        || triki(array[6], array[7], array[8]) 
        || triki(array[0], array[3], array[6]) 
        || triki(array[1], array[4], array[7]) 
        || triki(array[2], array[5], array[8]) 
        || triki(array[0], array[4], array[8]) 
        || triki(array[2], array[4], array[6]);
}

function mover(array, movimiento){
    if(movimiento < 10){
        if(typeof(array[movimiento]) == "number"){
            return true;
        }
    }
    return false;
}

function graficar(array){
    array.map((n1, n2)=>{
        imprimir(n1.toString())
        if(n2 == 2 || n2 == 5 || n2 == 8){
            console.log("")
            if(n2 != 8){
                console.log("---------")
            }
        }else{
            imprimir(" | ")
        }
    });
}

function juego(array, turno) {
    if(!victoria(array)){
        if(!derrota(array)){
            return true;
        }else{
            console.log("Ningun movimiento valido para ganar. Empate epico!!!!!")
        }
    }else{
        let s = (turno%2 == 0)?"1":"2";
        console.log("Victoria magistral del jugador " + s + " en el turno " + turno + "...")
    }
    return false;
}

function buscar(letra, ...data){
    if(data[0] == data[1] && data[0] == letra && typeof(data[2]) == "number"){
        return data[2];
    }else if(data[0] == data[2] && data[0] == letra && typeof(data[1]) == "number"){
        return data[1];
    }else if(data[1] == data[2] && data[1] == letra && typeof(data[0]) == "number"){
        return data[0];
    }
    return -1;
}

function IA(array, letra){
    let mov = -1;
    let j = [[array[0], array[1], array[2]]
            , [array[3], array[4], array[5]]
            , [array[6], array[7], array[8]]
            , [array[0], array[4], array[8]]
            , [array[2], array[4], array[6]]
            , [array[0], array[3], array[6]]
            , [array[1], array[4], array[7]]
            , [array[2], array[5], array[8]]];
    j.map((array)=>{
        let x = buscar("R", array[0], array[1], array[2]);
        if(x != -1){
            mov = x;
        }
    })
    if(mov == -1){
        j.map((array)=>{
            let x = buscar(letra, array[0], array[1], array[2]) 
            if(x != -1){
                mov = x;
            }
        })
    }
    if(mov == -1){
        if(mover(array, 4)){
            mov = 5;
        }else if(mover(array, 0)){
            mov = 1;
        }else if(mover(array, 2)){
            mov = 3;
        }else if(mover(array, 6)){
            mov = 7;
        }else if(mover(array, 8)){
            mov = 9;
        }else if(mover(array, 1)){
            mov = 2;
        }else if(mover(array, 3)){
            mov = 4;
        }else if(mover(array, 5)){
            mov = 6;
        }else if(mover(array, 7)){
            mov = 8;
        }
    }
    return mov;
}

function bucle(array, turno, fichas = ["*", "+"]){
    console.clear();
    console.log("");
    graficar(array);
    if(juego(array, turno)){
        let m = 0;
        if(fichas[turno%2] == "R"){
            m = IA(array, fichas[(turno + 1)%2]);
        }else{
            m = input("Ingrese el numero al cual jugara: ", "number");
        }
        if(mover(array, m-1)){
            array[m-1] = (turno%2 == 0)?fichas[0]:fichas[1];
        }else{
            console.log("Movimiento no valido");
        }
        bucle(array, turno + 1, fichas);
    }
    return;
}

function conf(){
    let tablero = [1,2,3,4,5,6,7,8,9];
    let fichas;
    console.log("¿Quieres configuracion avanzada?(y/n)");
    if(input("", "str").toLowerCase() == "y"){
        fichas = []
        if(input("¿Quieres activar la IA?(y/n)\n", "str").toLowerCase() == "y"){
            if(Math.random().toFixed(2) < 0.5){
                fichas.push("R");
                let letra = input("Elija el simbolo de combate: ", "str");
                fichas.push((letra[0] == "R")?"r":letra[0]);
            }else{
                let letra = input("Elija el simbolo de combate: ", "str");
                fichas.push((letra[0] == "R")?"r":letra[0]);
                fichas.push("R");
            }
        }else if(input("¿Quieres cambiar los simbolos?(y/n)\n", "str").toLowerCase() == "y"){
            let letra = input("Jugador 1: ", "str");
            fichas.push((letra[0] == "R")?"r":letra[0]);
            letra = input("Jugador 2: ", "str");
            fichas.push((letra[0] == "R")?"r":letra[0]);
        }else{
            fichas = ["*", "+"]
        }
    }
    bucle(tablero, 0, fichas);
}
conf();