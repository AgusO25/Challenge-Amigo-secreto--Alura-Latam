// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


/* Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

*/

let amigosSorteados = []; // Esta lista me sirve a mi para saber que amigos ya estan y no poder repetirlos.

function agregarAmigo(){
    let obtenerValor = document.getElementById("amigo");
    let nombreAmigo = obtenerValor.value;
    if (!validarEntrada(nombreAmigo)){
        alert("Por favor, escriba un nombre.")
        return;
    }else{
        if(!amigosSorteados.includes(nombreAmigo)){
            amigosSorteados.push(nombreAmigo);
            // Mostrar la lista con los nombres.
            let listaResultadoConAmigos = document.getElementById("listaAmigos");
            visualizarLista(listaResultadoConAmigos, nombreAmigo);
        }else{
            alert(`El nombre ${nombreAmigo} ya fue añadido`)
        }
        obtenerValor.value = ""; // Limpiar el valor.
    }
}

function validarEntrada(nombre) {
    // Verificar si el nombre es vacío o solo espacios
    // Esto no lo tuve que buscar
    if (nombre === "") {
        return false;
    }

    // Lo tuve que buscar para que pueda funcionar el codigo
    // Verificar todos los caracteres son espacios
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] !== " ") {
            return true; // Hay al menos una letra o carácter válido
        }
    }

    return false; // Eran solo espacios
}

function visualizarLista(unaLista, unNombre){
    unaLista.innerHTML += "<li>" + unNombre + "</li>"; // Lo hice así para que se vayan mostrando los nombres uno abajo del otro
}

function sortearAmigo(){
    if(amigosSorteados.length === 0){ // Verifico que la lista no este vacia
        alert("Por favor, agregue amigos para poder sortear.")  
    }else{
        let tamanioParticipantes = Math.floor(Math.random() * amigosSorteados.length); // Que pase a un número entero la cantidad de nombres que hay en la lista, ademas que tambien elija un número aleatorio
        let amigoGanador = amigosSorteados[tamanioParticipantes] // Obtiene el número aleatorio como una posición y en esa posición está el nombre de la persona.
        
        // Mostrar el resultado

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>El amigo secreto es: " + amigoGanador + "</li>";
    }
    return resultado;
}