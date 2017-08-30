if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}

const { resolve } = require('path')
const { spawn } = require('child_process');

const Nodemon = require('nodemon');

const commandExec = process.env.NODE_ENV === 'production' ? 'node' : 'nodemon';

const server = spawn(commandExec, [resolve(__dirname, './server.js')], {
  stdio: 'inherit',
});
