function getClassNameByPriority(priority) {
  if (priority === "High") return "red";
  if (priority === "Medium") return "yellow";
  if (priority === "Low") return "blue";
  return '';
}

function getInputValue(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element.value;
  }
  return '';
}

function getPriority() {
  return getInputValue('#priority');
}

function getTaskDescription() {
  return getInputValue('#new-task-description');
}

function getTaskDueDate () {
  return getInputValue('#new-task-due');
}

function createDeleteButton() {
  // create delete button 
  const deleteButton = document.createElement('button');

  // add button text
  deleteButton.innerText = "delete";

  //  add eventListener to button
  deleteButton.addEventListener('click', function (e) {
    e.target.parentNode.remove();
  })

  // return button
  return deleteButton;
}

function createListItem() {
  // create list item
  const listItem = document.createElement('li');
  listItem.innerText = getTaskDescription() + " " + getTaskDueDate();

  // create delete button
  const deleteButton = createDeleteButton();

  // append button to list item
  listItem.appendChild(deleteButton);

  // return list item
  return listItem;
}

function addListItem(className) {
  // create list item with text and button
  const listItem = createListItem();

  // add class to created list item
  listItem.className = className;

  // append created list item to its container
  // const taskList = document.querySelector('#tasks');
  const highList = document.querySelector('#high');
  const mediumList = document.querySelector('#medium');
  const lowList = document.querySelector('#low');
  const priority = getPriority();
  if (priority === "High") {
    highList.appendChild(listItem);
  }else if (priority === "Medium") {
    mediumList.appendChild(listItem);
  }else if (priority === "Low") {
    lowList.appendChild(listItem);
  }
}

function clickHandler(event) {
  event.preventDefault();

  // get priority
  const priority = getPriority();

  // get className by priority
  const className = getClassNameByPriority(priority);

  // add a list item with label and button
  addListItem(className);
}

document.addEventListener("DOMContentLoaded", function () {
  // get button
  const myButton = document.querySelector("#new-task-submit");

  // add click event listener
  myButton.addEventListener("click", clickHandler);
});
