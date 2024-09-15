let task = document.querySelector('.txt1')

let but = document.querySelector('.but')
let taskList = document.querySelector('.no-tasks-message')
let task_count = document.querySelector('.count_t')
let task_completed = document.querySelector('.completed_t')
let todo = document.querySelector('.todo')
let arr_task=[]

if(localStorage.getItem('todo')){
    arr_task = JSON.parse(localStorage.getItem('todo'));
    displayList();
}

but.onclick = function(){
    if(task.value == ''){
        alert('Пустая строка!!!')
    }
    else{
    let checkList = {
        todo: task.value,
        cheсked: false,
        important: false
    };

    arr_task.push(checkList);
    displayList();
    localStorage.setItem('todo', JSON.stringify(arr_task));
}
}

function displayList(){
    let dispL =''
    arr_task.forEach(function(item,i){
        dispL += `<li><input type='checkbox' id = 'item_${i}'${item.cheсked ? 'cheсked' : ''}> 
        <label for = 'item_${i}'>${item.todo}</label>
        <\li>`;
        taskList.innerHTML = dispL;
        task.value = ''
        task_count.innerHTML = arr_task.length
        
        
    })
}
let count = 0
taskList.ondblclick = function(event){
    event.preventDefault();
    arr_task.forEach(function(item,i){
        if(item.todo === event.target.innerHTML){
            arr_task.splice(i,1);
            count++
        }
        task_completed.innerHTML = count
        displayList();
        localStorage.setItem('todo', JSON.stringify(arr_task));
    })
}

document.querySelector('.toggle-switch').onclick = function(){
    if(document.body.style.background == 'black'){
        document.body.style.background = 'white'
        document.querySelector('.textColor').style.color = 'black'
    }
    else{
        document.body.style.background = 'black'
        document.querySelector('.textColor').style.color = 'white'
    }
}

