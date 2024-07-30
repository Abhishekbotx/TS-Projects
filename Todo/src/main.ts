import './style.css'

type TodoType = {
  title: string,
  isCompleted: boolean,
  readonly id: string
}

const Todos: TodoType[] = []

const todosContainer = document.querySelector(
  '.TodoContainer'
) as HTMLDivElement


const todoInput = document.querySelector('#inputTitle') as HTMLInputElement
const deletebutton=document.querySelector('.deletebtn') as HTMLButtonElement
const CheckBox=document.querySelector('.isCompleted') as HTMLInputElement
const myForm = document.querySelector('.myForm ') as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: TodoType = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.floor(Math.random() * 100))
  }
 console.log(Todos);
 
  Todos.push(todo);
  // console.log(Todos);
  todoInput.value=''
  renderTodo(Todos)
  

}

const generateTodo=(title:string,isCompleted:boolean,id:string)=>{
  const todo:HTMLDivElement=document.createElement('div');
  todo.className='Todo'

  //creating a checkbox
  
  const checkbox:HTMLInputElement=document.createElement('input');
  checkbox.setAttribute('type','checkbox'),
  checkbox.className='isCompleted';
  checkbox.checked=isCompleted
  checkbox.onchange=()=>{
    paragraph.className=checkbox.checked?'line':'';
  }

  //creating a p for title

  const paragraph:HTMLParagraphElement=document.createElement('p');
  paragraph.innerText=title
  const btn:HTMLButtonElement=document.createElement('button');
  btn.innerText='delete';
  btn.className='deletebtn'
   
  btn.onclick = () => {
    const filteredTodos = Todos.filter(todo => todo.id !== id)
    Todos.length = 0
    Todos.push(...filteredTodos)
    renderTodo(Todos)


    /*
    const index=Todos.findIndex(i=>i.id===id)
    Todos.splice(index,1)//deletes one item
    */
    
  }
   

  console.log('todo', todoInput);
  console.log('input value:', todoInput.value);
  

  todo.append(checkbox,paragraph,btn)

  todosContainer.append(todo)


}

const renderTodo=(todos:TodoType[])=>{
  todosContainer.innerHTML = ''; 
  Todos.forEach(item=>{
    generateTodo(item.title,item.isCompleted,item.id)
  })
}






// Todos.map((item)=>{
//   todosContainer.append(item)
// })



