const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

let form = document.getElementById('form');
let task = document.getElementById('task');
let btnAdd = document.getElementById('btn-add');
let tasksResults = document.getElementById('tasks-results');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (task.value !== '') {
    createTask(task.value);
    console.log(task.value);
    task.value = '';
    renderTask();
  }
})

const createTask = (value) => {
  const newTask = {
    id: Math.floor(Math.random() * 1000),
    title: value,
    completed: false
  };
  console.log(newTask);
  tasks.unshift(newTask)
}
console.log(tasks);
const renderTask = () => {
  const html = tasks.map(task => {
    return`
      <div class="task">
        <div class="completed">
          ${ task.completed  
            ? `<span class="done"> Done </span>`
            : `<button class="btn-start" data-id="${task.id}"> Start </button>` 
            }
          </div>
        <div class="Title">${task.title}</div>
      </div>
    `
  })
  console.log("html", html);
  htmlResults = html.join('');
  tasksResults.innerHTML = htmlResults; 
}


