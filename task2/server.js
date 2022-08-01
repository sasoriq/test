const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response) {
      
    if(request.url == "/hello"){
        response.end("Connected");
    }
    else {
        fs.readFile("list_form.html", (error, data) => response.end(data));
    }
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));