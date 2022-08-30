//CallBack
// const handler = ()=>{
//     alert("han pasado 5 segundos")
// }

// setTimeout(handler, 5000)



// function getData(onComplete){
//     const data = ["Erwin", "Jose", "Matias", "Leonel"]
//     setTimeout(()=>{
//         onComplete(data)
//     },10000)
// }

// getData((data)=>{
//     console.log(data)
// })

const characters = document.getElementById("characters")

const createCard = (character)=>{
    const article =document.createElement("article")
    const p = document.createElement("p")
    p.innerText = characters.name
    const img = document.createElement("img")
    img.src = character.image
    
    article.appendChild(p) //AppendChild: Agregale un hijo al padree
    article.appendChild(img) //AppendChild: Agregale un hijo al padree
    characters.appendChild(article)
}

//Gestionando Promesas
fetch("https://rickandmortyapi.com/api/character") //fetch -> ve y traeme algo
.then((response)=>{
    return response.json()  // Convierte el body de la respuesta en json. Y Esto tambien devuelve una promesa
})
.then((body)=>{
    console.log("Body",body)
    const characters = body.results

    characters.array.forEach(character => {
        createCard(character)
    });

}) //CASO EXITOSO
// URL O recurso no disponible, Error del servidor, Conversion incorrecta
.catch((error)=>{
    console.log("E",error)
}) //CASO FALLIDO

//Investigar async/await