const fs = require('fs');
const colors = require('colors');
const config = require('./config.json');

console.log(colors.cyan(config.about.logo.join('\n')));

process.stdout.write("--Importing Modules--");
//IMPORTS GO HERE
process.stdout.write("\r--Modules Imported--\n");

var webserv = require('./services/webservers.js');

// Mark Starting Time for Team
fs.appendFileSync('correctlog.txt', "(" + config.teamcfg.name + ")" + " Start (" + Date.now() + ')\n');

//console.log(config.flags.length);
webserv.rundashserver(config.servercfg.dashboard.bindaddr, config.servercfg.dashboard.bindport,config.flags,config.teamcfg.name);