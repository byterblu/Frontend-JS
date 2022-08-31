const characters = document.getElementById("characters")

const createCard = (character)=>{
    const article = document.createElement("article")
    const p = document.createElement("p")
    p.innerText = character.name
    const img = document.createElement("img")
    img.src = character.image
    
    article.appendChild(p) //AppendChild: Agregale un hijo al padree
    article.appendChild(img) //AppendChild: Agregale un hijo al padree
    characters.appendChild(article)
}

// async/await
async function getData(){
   
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json()
        if(response.ok){
            
            console.log(data)
             data.results.forEach(character => {
            createCard(character)
             });
    
        }else{
            throw Error("Ocurrio un error")
        }
        

    } catch (error){
        console.log(error.message)
    }

   
    

}
 
getData()
