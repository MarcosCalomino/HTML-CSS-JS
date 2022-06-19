//desde el documento se selecciona un elemento por su id, el formulario tiene un id llamado formTask, linea 23 documento HTMl,
// por lo tanto en la linea de abajo seleccione el formular con el comando document.getElementById('formTask');
//con .addEventListener('submit', function); obtengo acceso a un evento del formulario. Cada vez q doy click en el boton se ejecuta la funcion q esta al lado de submit
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){
 let title = document.getElementById('title').value;
 let description = document.getElementById('description').value;
 
const task = {
	title: title,
	description: description
};
//localStorage es una funcionalidad que ya traen los navegadores, nos permite almacenar los datos dentro de la propia mem del navegaor
//setItem permite almacenar un dato
//JSON.stringify(task) permite convertir un objeto en un string
//localStorage.setItem('tasks', JSON.stringify(task));

if(localStorage.getItem('tasks') === null){
	let tasks = []; // creo un arreglo
	tasks.push(task); //lleno el arreglo con la tarea nueva, push se encarga de ingresar un dato al arreglo 
	localStorage.setItem('tasks', JSON.stringify(tasks));//una vez tengo el arreglo lo almaceno en el localStorage
}else{
    let tasks = JSON.parse(localStorage.getItem('tasks')); //obtengo las tareas almacenadas en el localStorage y las guardo en una variable
    tasks.push(task); 
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

  
 getTasks();
 document.getElementById('formTask').reset();
 e.preventDefault();	
}



function getTasks(){//hace una consulta al local storage y una vez obtenga los datos los muestra por pantalla
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let tasksView = document.getElementById('tasks');//obtiene un div me parece
	
	tasksView.innerHTML = '';
	
	for(let i = 0; i< tasks.length; i++){
	let title = tasks[i].title;	
	let description = tasks[i].description;	
	
	tasksView.innerHTML += `<div class="card mb-3">
	 <div class="card-body">
	  <p>${title} - ${description}</p>
	  <a class="btn btn-danger" onclick="deleteTask('${title}')">
	  Borrar
	  </a>
	 </div>
	</div>` 
	}
}



function deleteTask(title){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i< tasks.length; i++){
     if(tasks[i].title == title){
	    tasks.splice(i, 1);//splice se encarga de quitar un dato del arreglo 
     }	
  }	
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
getTasks();
