const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const file = fs.readFileSync('./html/index.html', "utf8");
const requester = (req, res) =>{
    if(req.url == '/'){
        res.setHeader("Content-Type", "text/html");
        res.write(file);
        res.end();
    }
} 

http.createServer(requester).listen(port);