const fs = require('fs');
const colors = require('colors');
const config = require('./config.json');

console.log(colors.cyan(config.about.logo.join('\n')));

process.stdout.write(colors.yellow("[*] Importing Modules  "));
//IMPORTS GO HERE
process.stdout.write(colors.green("\r[+] Modules Imported  \n"));

var webserv = require('./services/webservers.js');

//Figure out which team is active
var team = 0;
var numActive = 0;
for(var i = 0; i < config.teamcfg.teams.length; i++){
    if(config.teamcfg.teams[i].active == "1"){
        numActive++;
        team = i;
    }
}
if(numActive != 1){
    console.log(colors.red("* Fix Active Team Settings in config!"));
    process.exit();
} else{
    console.log(colors.yellow("[*] Using Active team " + colors.cyan(config.teamcfg.teams[team].name)));
}

console.log(colors.yellow("[*] Loaded " + config.flags.length + " flags!"));

// Mark Starting Time for Team
fs.appendFileSync('correctlog.txt', "(" + config.teamcfg.teams[team].name + ")" + " Start (" + Date.now() + ')\n');
webserv.rundashserver(config.servercfg.dashboard.bindaddr, config.servercfg.dashboard.bindport,config.flags,config.teamcfg.teams[team].name);