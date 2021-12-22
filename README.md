# TinyCTF

## Purpose
This was originally created to be used for a CTF escape room. It works best when only one teams is competing at a time.

## Adding Teams
Teams can be added via a Json object in the config file. Each team has a name and an indicated as to which one is active. Changes require server restart.    

They use the following format...    
```
    "teamcfg" : {
        "teams" : [
            {"name":"cyber1", "active":"1"},
            {"name":"cyber3", "active":"0"}
        ]
    },
```

## Adding Flags
Flags can be added via a Json object in the config file. Each flag has a string and a point value associated with it. Changes require server restart.    

They use the following format...    
```
   "flags" : [
        {"flag":"ursneaky", "value":"1"},
        {"flag":"FISHAREHOT", "value":"1"}
    ]
```

## TLDR Instructions
1. Install dependancies with ` npm i `    
2. Add your teams and flags to the config.json file    
3. Finally run app.js with ` sudo node app.js `   

## Additional Notes
I am not actively working on / maintaining this repo. This was used one time and worked well for me.    
If you are interested in contributing or adding features, I would be more than happy to take pull requests and become more active with this repo. Right now, there is a need for...

 - [] A way to swap the active team and adding challenges without relaunching the server.    
 - [] A built-in scoreboard rather than a bash script that run on a log file :D    

If you are hosting a CTF, I'd encourage you to take a look at the [CTFd](https://ctfd.io/) platform as it is rather well polished and has a lot of nice features.