const form = document.getElementById("form1")
const questions = document.getElementById("questions")
form.addEventListener("submit",handleSubmit)


// <div class="card w-50">
// <div class="card-body">
//   <h4 class="card-title">Card title</h4>
//   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
// </div>
// </div>



function initialize(){
    console.log("Hi")
    console.log(JSON.parse(localStorage.getItem("questions")))
    if(JSON.parse(localStorage.getItem("questions")).length == 0){
        console.log("hit")
        return
    } 
    const data = JSON.parse(localStorage.getItem("questions"))
    data.forEach((data)=>{
        render(data.id,data.name,data.msg)
    })
    console.log(data)
}
document.addEventListener('DOMContentLoaded',initialize)
const render = (id,question,name)=>{
     const outer = document.createElement("div")
    // outer.className = "card-body"
    // const h4 = document.createElement("h4")
    // h4.innerHTML = "<h1>HI</h1>"
    // questions.appendChild(outer)

    outer.innerHTML = `
    <div " class="card w-50" >
    <div class="card-body">
      <h3 class="card-title">${name}</h3>
      <p class="card-text">By: ${question}</p>
      <button id=${id} type="button"  class="btn btn-danger">Delete</button>
    </div>
    </div>
    <hr>
    `
    outer.addEventListener('click',deletePost)
    questions.appendChild(outer)
}

const deletePost = (e)=>{
    console.log(e.target.id)
    const data = JSON.parse(localStorage.getItem("questions"))
    let newData = data.filter((d)=>d.id !== e.target.id)
    localStorage.setItem("questions",JSON.stringify(newData))
    // data = JSON.parse(localStorage.getItem("questions"))
    document.getElementById("questions").innerHTML = ""
    initialize()
}

function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    let object = {}
    let data = []
    formData.forEach((value, key) => object[key] = value);
    object.id= Math.random().toString(16).slice(2)
    render(object.id,object.name,object.msg)
    console.log(object)
    const prev = JSON.parse( localStorage.getItem("questions"))
    if(!prev) data.push(object)
    else{
        data = JSON.parse( localStorage.getItem("questions"))
        data.push(object)
    }
    localStorage.setItem("questions",JSON.stringify(data))
}



