
const form1 = document.getElementById("form1")
const questions1 = document.getElementById("questions")
form1.addEventListener("submit",handleSubmit)


function initialize(){
    if(!localStorage.getItem("questions")) return 
    const data = JSON.parse(localStorage.getItem("questions"))
    data.forEach((data)=>{
        render(data.name,data.msg)
    })
    console.log(data)
}

