const express = require("express")

var app = express()

app.get("/other", function(request, response){
        response.send("Otra cosa!")
})

app.listen(10000, function(){
    console.log("App started in port 10000")
})