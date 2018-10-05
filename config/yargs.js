const description = {
  demand: true,
  alias: 'd',
  desc: 'description for todo task'
}

const completed = {
  default: true,
  alias: 'c',
  desc: 'completed or pending task'
}
const argv = require('yargs')
              .command('create', 'create a new todo', {
                description
              })
              .command('update', 'update todo', {
                description,
                completed
              })
              .command('remove', 'remove a task', {
                description
              })
              .command('list', 'display completed tasks', {
                completed
              })
              .help()
              .argv;

module.exports = {
  argv
}