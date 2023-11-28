


function createP(){
    const datos = document.querySelector("#userText").value 
    var elemento = document.createElement("p")
    console.log(elemento)

    elemento.innerHtml = datos
    const contenedor = document.querySelector("#contenedor")
    contenedor.appendChild(elemento)
    console.log(elemento)
}
