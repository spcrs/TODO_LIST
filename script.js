class Todo{
  constructor(subject,detail,due){
    this.subject = subject
    this.detail = detail
    this.due = due
  }
}

class UI{
  static addTodo(Todo){
    const tbody = document.querySelector(".tbody")
    const new_row = document.createElement("tr")
    
    new_row.innerHTML = `
    <td class="su">${Todo.subject}</td>
    <td class="de">${Todo.detail}</td>
    <td class="du">${Todo.due}</td>
    <td class="remove">X</td>`

    tbody.appendChild(new_row)
  }

  static onload(){
    // const todos = [{"subject" : "c#",
    //                  "detail" : "Assignment",
    //                 "due" : "29-10-2001"},
    //                 {"subject" : "c#",
    //                 "detail" : "Assignment",
    //                "due" : "29-10-2001"}]

    let todos = JSON.parse(localStorage.getItem("todos")) || []
   
    todos.forEach((todo)=>this.addTodo(todo))
  }

  static remove(e){ 
      e.target.parentNode.remove()
  }
}

//Storage
class Storage{
  static add(todo){
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.push(todo)
    console.log(todos)
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  static remove(todo){
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
      if(todos[i]["subject"] === todo["subject"] &&  todos[i]["subject"] === todo["subject"] && todos[i]["subject"] === todo["subject"])
        todos.splice(i,1)
    }

    localStorage.setItem("todos",JSON.stringify(todos))

  }
}


//add event handler to add book
const form = document.querySelector(".form")
console.log(form)
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const subject = document.querySelector("#subject").value
  const detail = document.querySelector("#detail").value
  const due = document.querySelector("#due").value
  console.log(subject)
  if(subject === "" || detail === "" || due ===""){
    alert("please fill every field")
    return
  }
  const new_todo = new Todo(subject,detail,due)
  UI.addTodo(new_todo)

  Storage.add(new_todo)
})


//on load event handler
document.addEventListener("load",UI.onload());



//remove a book
const table = document.querySelector(".table")
table.addEventListener('click',(e)=>{
  // console.log("Dfkdsfsd")
  // console.log(e.target.class)
  if(e.target.className==="remove"){
    console.log("remove this please")
    UI.remove(e)
    // console.log(e.target.parentNode);
    let childrens = e.target.parentNode.children,subject,detail,due;
    // console.log(childrens[0].textContent)
    console.log("Dkfh")
    subject = childrens[0].textContent
    detail = childrens[1].innerHTML
    due = childrens[2].innerHTML

  

    const todo = new Todo(subject,detail,due)
    Storage.remove(todo)
  }
})



const button = document.querySelector(".button")
