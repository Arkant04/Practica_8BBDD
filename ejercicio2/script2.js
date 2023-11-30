function tirarDado(){
    const data = document.querySelector("#inputDado").value
    console.log(data)
    const tirada = data.split("d")
    console.log(tirada)
    const misDados = []
    console.log(tirada[0])
    for(let i = 0; i< tirada[0] ; i++){
       const resultado = Math.floor(Math.random() * tirada[1]) +1
       misDados.push(resultado)
    }
    return misDados
}




