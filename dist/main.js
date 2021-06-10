'use strict';

// global vars
var addNewTaskTxt = document.querySelector('.addNewTask'); // <form> element that contains input feild wich gets added to the addedTasks section
var addedTasks = document.querySelector('.addedTasks'); // container of all the added tasks that will be used to append child
var deleteBtns = document.querySelectorAll('.fa-times'); // delete btn
// event listenrs
// adds a task
addNewTaskTxt.addEventListener('submit', addNewTaskEvent);
function addNewTaskEvent(e) {
  e.preventDefault();
  var submitTxt = document.querySelector('#submit-txt').value; // gets input feilds value when submites
  var addedTask = document.createElement('div'); // div of each task
  addedTask.className = 'card';
  var leftSide = document.createElement('div'); // left side of a task
  leftSide.className = 'left';
  var leftIcon = document.createElement('i'); // icon side of a task
  leftIcon.className = 'fas fa-times';
  // deletes a task
  leftIcon.addEventListener('click', function deleteCard(e) {
    leftIcon.parentElement.parentElement.remove();
  });
  var rightSide = document.createElement('div'); // right side of a task
  rightSide.className = 'right';
  var taskTxt = document.createElement('div'); // the tasks name
  taskTxt.className = 'taskValue';
  taskTxt.appendChild(document.createTextNode(submitTxt)); // task name node of submitTxt
  // APPEND CHILDS
  addedTasks.appendChild(addedTask);
  addedTask.appendChild(leftSide);
  addedTask.appendChild(rightSide);
  leftSide.appendChild(leftIcon);
  rightSide.appendChild(taskTxt);
};