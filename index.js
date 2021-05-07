const express = require("express")

var app = express()

app.get("/", function(request, response){
        response.send("Hola!")
})

app.listen(10000, function(){
    console.log("App started in port 10000")
})