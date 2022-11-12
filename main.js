// Importing 'http' module
const http = require('http');

// Setting Port Number as 80
const port = 80;

/*
#!/bin/bash
yum install httpd -y
service httpd start
chkconfig httpd on

wget https://github.com/rajeshpal1984/aws_node/archive/refs/heads/main.zip
unzip main.zip
cp -r aws_node-main/* -d /var/www/html/

*/

// Setting hostname as the localhost
// NOTE: You can set hostname to something
// else as well, for example, say 127.0.0.1
const hostname = '0.0.0.0';

// Creating Server
const server = http.createServer((req,res)=>{

// Handling Request and Response
res.statusCode=200;
res.setHeader('Content-Type', 'text/plain')
res.end("Welcome to Geeks For Geeks")
});

// Making the server to listen to required
// hostname and port number
server.listen(port,hostname,()=>{

// Callback
console.log(`Server running at http://${hostname}:${port}/`);
});
