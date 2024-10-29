/**
 * This function edit a task
 */
async function saveEditedTask() {
  let task = editingObjetTask();
  const index = tasks.findIndex((element) => element.id === currentTaskId);
  await putData(task, `tasks/${currentTaskId}`);    
  await loadData('tasks');
  await renderHTMLBoard();
  await loadData("tasks");
  openDialog('task_popup_template.html', index) 
  closeDropDownAssignUser();
  typeOfTask = 1;
  // loadDataBoard();
}

/**
 * This function edit a current open task
 * @returns - The edited task
 */
function editingObjetTask() {
  let status = currentTask.status;
  selectdNameAssignedtask();
  let titleTask = document.getElementById("title_task");
  let descriptionTask = document.getElementById("description_task");
  let nameInTask = selectdNameAssignedtask();
  let timeDeadlineTask = document.getElementById("due_date_task");
  let categoryTask = document.getElementById("option-selected");
  if(titleTask.value == "" || timeDeadlineTask.value == "" || categoryTask.dataset.filled == "Select task category"){
    validationAddTask();
    return
  }
  let task = {
    titleTask: titleTask.value,
    descriptionTask: descriptionTask.value,
    nameAssignedTask: nameInTask,
    timeDeadlineTask: timeDeadlineTask.value,
    priorityTask: priorityTask,
    categoryTask: categoryTask.textContent.trim(),
    subTasks: subTasks,
    status: status,
  };
  return task;
}
