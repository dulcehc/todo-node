const fs = require('fs');

let listToDo = [];

const saveDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('File was not saved', err);
  });
}

const loadDB = () => {
  try {
    listToDo = require('../db/data.json');
  } catch (error) {
    listToDo = [];
  }
}

const getList = (completed) => {
  loadDB();
  completed = JSON.parse(completed);
  return listToDo.filter(task => task.completed === completed);
}

const create = (description) => {
  loadDB();
  let toDo = {
    description,
    completed: false
  };
  listToDo.push(toDo);
  saveDB();
  return toDo;
}

const update = (description, completed) => {
  loadDB();
  let index = listToDo.findIndex(task => task.description === description);

  if (index >= 0) {
    listToDo[index].completed = JSON.parse(completed);
    saveDB();
    return true;
  } else {
    return false;
  }
}

const remove = (description) => {
  loadDB();
  let newList = listToDo.filter(task => task.description != description);

  if (listToDo.length === newList.length) {
    return false;
  } else {
    listToDo = newList;
    saveDB();
    return true;
  }
}

module.exports = {
  create,
  getList,
  update,
  remove
}