


function createP(){
    const datos = document.querySelector("#userText").value 
    var elemento = document.createElement("p")
    console.log(datos)
    console.log(elemento)

    elemento.innerHTML = datos
    console.log(elemento)

    const contenedor = document.querySelector("#contenedor")
    console.log(contenedor)

    contenedor.appendChild(elemento)
    console.log(elemento)
}
