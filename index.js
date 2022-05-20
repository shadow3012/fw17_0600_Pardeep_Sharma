let studentDetails = JSON.parse(localStorage.getItem("studentDetails"))||[]
let batch1 = 0
let batch2 = 0
studentDetails.forEach(({batch})=>{
    if(batch=="batch1"){
        batch1++
    }
    else if(batch=="batch2"){
        batch2++
    }
})

document.getElementById("batch1").innerText = `Batch 1 : ${batch1}`
document.getElementById("batch2").innerText = `Batch 2 : ${batch2}`

// studentDetails.forEach(({name,}))



document.getElementById("student").addEventListener("submit",()=>{
    event.preventDefault()
    function Student(name,batch,course,unit,image){
        this.name = name,
        this.batch = batch,
        this.course = course
        this.unit = unit
        this.image = image

    }
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    let batch = document.getElementById("batch").value
    let unit = document.getElementById("unit").value
    let course = document.getElementById("course").value
    if(name!="" && image!=""&&course!=""){
        let s1 = new Student(name,batch,course,unit,image)
        studentDetails.push(s1)
        localStorage.setItem("studentDetails",JSON.stringify(studentDetails))
    }
    window.location.reload()
})