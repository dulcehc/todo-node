const argv = require('./config/yargs').argv;
const toDo = require('./todo/todo');
const colors = require('colors');
let command = argv._[0];

switch (command) {
  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    break;

  case 'list':
    console.log('====list todo===='.green);
    toDo.getList(argv.c).map((task) => {
      console.log(`**********`.yellow);
      console.log(`Task: ${task.description}`);
      console.log(`Completed: ${task.completed}`);
      console.log(`**********`.yellow);
    });
    break;

  case 'update':
    let isUpdated = toDo.update(argv.d, argv.c);
    console.log(isUpdated);
    break;

  case 'remove':
    let isRemoved = toDo.remove(argv.d);
    console.log(isRemoved);
    break;

  default:
    console.log('unknown command');
    break;
}