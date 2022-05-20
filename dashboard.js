let studentDetails = JSON.parse(localStorage.getItem("studentDetails"))||[]
let batch1 = 0
let batch2 = 0
studentDetails.forEach(({batch,name,unit,image,course},index)=>{

    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.className='students'
    let Name = document.createElement("h1")
    Name.innerText = name
    let Batch = document.createElement("h2")
    Batch.innerText = batch
    let Course = document.createElement("h2")
    Course.innerText = course
    let Unit = document.createElement("h2")
    Unit.innerText = unit
    let img = document.createElement("img")
    img.src = image
    img.style.width = "100px"
    img.style.height = "150px"
    let button = document.createElement("button")
    button.innerHTML = "&times;"
    button.style.backgroundColor = "red"
    button.style.height = "20px"
    
    let data = {batch,index}
    button.onclick = ()=>{
     removeStudent(data)
    }
    div.append(Name,Batch,Course,Unit,img,button)
    document.getElementById("container").append(div)

    if(batch=="batch1"){
        batch1++
    }
    else if(batch=="batch2"){
        batch2++
    }
})
function removeStudent(data){
    
    if(data.batch=="batch1"){
        batch1--
    }
    else if(data.batch=="batch2"){
        batch2--
    }
    studentDetails.splice(data.index,1)
      
    
    
    localStorage.setItem("studentDetails",JSON.stringify(studentDetails))
    window.location.reload()


}


document.getElementById("batch1").innerText = `Batch 1 : ${batch1}`
document.getElementById("batch2").innerText = `Batch 2 : ${batch2}`