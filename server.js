const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    this.task = {}; 
    this.taskId = 1;

    process.nextTick(() => {
      this.emit('response',
      'Type a command (help to list commands')
    });

    client.on('command', (command, args) => {
      switch (command) {
        case 'add':
          this.add(args);
        case 'ls':
          this.ls(args);
        case 'help':
          this.help();
        case 'delete':
          this.delete(args);
          break;
        default:
          this.emit('response', 'Unkown command ...');
      }
    });
  }

  add(args) {
    this.emit('response', args);
  }

  ls(args) {
    console.log('add >>> ', args);
  }

  delete(args) {
    console.log('add >>> ', args);
  }

  help() {
    this.emit('response', `\nAvailabel Commands:
    add task
    ls
    delete :id`);
  }
};

module.exports = (client) => new Server(client);