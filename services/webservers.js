module.exports = {
  rundashserver: function (bindaddr, bindport, flags, teamname) {

    const bodyParser = require('body-parser');
    const express = require('express');
    const path = require('path');
    const fs = require('fs');
    const app = express();

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // set the view engine to ejs
    app.set('view engine', 'ejs');
    app.set('views', path.join('./services/views'));
    app.use('/public', express.static(__dirname + '/public'));

    const addr = bindaddr;
    const port = bindport;

    // set the app to listen on the port
    app.listen(port, () => {
        console.log(`Website running at → ${addr}:${port}`);
    });

    app.get('/', (req, res) => {
        res.render('guess',{title:'TinyCTF', error:'', good:''});
    });

    app.post('/', (req, res) => {
        if(!req.body.guess){
            res.render('guess',{title:'TinyCTF', error:'Try harder!', good:''});
        } else {

            var i = 0;
            var goodguess = 0;

            do {
                if(flags[i].flag.trim() == req.body.guess.trim()){
                    var towrite = "("+ teamname +") Got flag: " + flags[i].flag.trim() + " (" + Date.now() + ")";
                    goodguess = 1;

                    fs.appendFileSync('correctlog.txt', towrite + '\n');
                    console.log(towrite);
                }
              i++;
            } while (i < flags.length && goodguess != 1);

            if(goodguess){
                res.render('guess',{title:'TinyCTF', error:'', good:'You got one!'});
            } else{
                res.render('guess',{title:'TinyCTF', error:'Try harder!', good:''});
            }
            //res.redirect('/');
        }
    });
  }
};
