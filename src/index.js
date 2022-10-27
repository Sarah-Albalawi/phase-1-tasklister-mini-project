document.addEventListener("DOMContentLoaded", () => {
 
  // your code here
     let form = document.querySelector('form');
     form.addEventListener('submit', (e) =>{
      e.preventDefault();
      //console.log(e.target);

      handleToDo(e.target.input.value);
      form.reset();
    });
     })
   

    function handleToDo(list){
      let para = document.createElement('li');
      let btn = document.createElement('button');
      btn.textContent ='DELETE';
      para.textContent = `${list} `;
      para.appendChild(btn);
      console.log(para);
    let toDos = document.getElementById('tasks');
    toDos.appendChild(para)
      btn.addEventListener('click', handleDelete)
    } 
 function handleDelete(e){
         e.target.parentNode.remove();
 }
