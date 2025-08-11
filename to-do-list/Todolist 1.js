const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
];
rendertodoList();
function rendertodoList() {
  let todoListHTML = ''; 
  //we took a string to save the html code to make it appear on console
  //for(let i =0;i<todoList.length;i++)
  //{

  todoList.forEach( (todoObj, index) => {
    //const todoObj = todoList[i];
    const { name, dueDate } = todoObj;
    const html = `<div>${name}</div>
           <div> ${dueDate}</div>
            <button
            class="delete-todo js-delete">Delete</button>
         `;
    todoListHTML += html;
  });

  //     const todoObj = todoList[i];//access all the elements in array
  //    // const name = todoObj.name;
  //    //const dueDate = todoObj.dueDate;
  //     const {name,dueDate}= todoObj;
  //         const html =
  //         `<div>${name}</div>
  //          <div> ${dueDate}</div>
  //                 <button onclick="
  //                     todoList.splice(${i},1);
  //                     rendertodoList();
  //                 " class="delete-todo">Delete</button>
  //          `;

  //         //put each element in th p tag in the console
  //         todoListHTML+=html;//added all the elements together

  //         //todoListHTML+=`<p>${todoList[i]}</p>`;

//console.log(todoListHTML);
document.querySelector(".js-todo-list").innerHTML = todoListHTML; 
//changing the inner HTML of the page i.e whtever is in this tag will be replaced by the code inside todoList and todoList has HTML code


document.querySelectorAll('.js-delete')
  .forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>
    {
       todoList.splice(index,1);
        rendertodoList();
    });

  });


//all giving priveilage to all the delete buttons and if we console.log the result it will give the list of all the elements in which delete button is added so we will loop through the list to add the event listeners
}

document.querySelector('.js-add')
.addEventListener('click', ()=>
{
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  // console.log(todoList);

  inputElement.value = "";

  //if everytime u sre changeing the html on page then we do it with the help of script element

  rendertodoList();
}

//ALGORITHM
//1.Save the data
//2.Generate the HTML
//3.Make it interactive
