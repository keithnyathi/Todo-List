const todoList =  JSON.parse(localStorage.getItem('todoList')) || [
  {
    item: 'Sing a song',
    date: '2023-11-25'
  }
]


renderList();

function renderList() {
  let html = '';

  todoList.forEach((listItem,index) => {

   const {item,date}  = listItem;
   
   html += 
   `
   <div class="output-list-item"> 
       <input type="checkbox" class="todo-done">

       <p class="todo-name">${item}</p>

       <p class="todo-date">${date}</p>

       

       <button class="remove-list">Delete</button>
     </div>
   `

  })


 document.querySelector('#output-items-container').innerHTML = html;


 document.querySelectorAll('.remove-list')
   .forEach((button, index) => {
      button.addEventListener('click', () => {
        todoList.splice(index,1);
        renderList()
      })
   })

  document.querySelectorAll('.todo-done')
    .forEach((checkbox,index) => {
      checkbox.addEventListener('click', () => {
        todoList.splice(index,1);
        renderList()
      })
    })

}






document.querySelector('.add-button')
  .addEventListener('click', () => {
    addtodo();
    
  })






function addtodo() {
  const listInputEl = document.querySelector('.input-list-item');
  const listInputElValue = listInputEl.value;

  const dateInputEl = document.querySelector('.list-item-date');
  const dateInputElValue = dateInputEl.value;
 

  todoList.push(
   {
    item: listInputElValue,
    date: dateInputElValue
   }
  )


  listInputEl.value = '';



  renderList()
  
 
}


localStorage.setItem('todoList',JSON.stringify(todoList));


