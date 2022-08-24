const dragElements = document.getElementById("dragElements")
const dropZone = document.getElementById("dropZone")



const draggableElements = dragElements.children

let dragginElement 
let dragginElementParent

for(let i = 0; i < draggableElements.length; i++){
    const element = draggableElements[i];
    element.draggable = true

    element.ondrag = (event) =>{
        dragginElement = event.target
        if(dragginElement.parentNode===dragElements){
            dragElements.removeChild(dragginElement)
        }
        
    }
    
    element.ondragend = (event) =>{
        dragginElementParent = event.target
        if(dragginElementParent.parentNode!==dropZone){
            dragElements.appendChild(dragginElement)
        } 

    }


}

dropZone.ondragover = (event) =>{
    event.preventDefault()
    dropZone.style.backgroundColor = "#ee8434"
}

dropZone.ondragleave = () =>{
    dropZone.style.backgroundColor = "transparent"
}

dropZone.ondrop =(event) =>{
    dropZone.appendChild(dragginElement)
    dropZone.style.backgroundColor = "transparent"
}

dragElements.ondragover = (event) =>{
    event.preventDefault()
    dragElements.style.backgroundColor = "#717ec3"
}

dragElements.ondragleave = () =>{
    dragElements.style.backgroundColor = "transparent"
}

dragElements.ondrop =(event) =>{
    dragElements.appendChild(dragginElement)
    dragElements.style.backgroundColor = "transparent"
}