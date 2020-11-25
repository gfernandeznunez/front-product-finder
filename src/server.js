const express = require('express');
const path = require('path');
const PORT = process.env.PORT || '8080'

const app = express();

app.use(express.static(__dirname+'/dist/ng-blog'));
//app.use(express.static(__dirname + './dist/expense-app'));
/*
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});
*/
//app.listen(process.env.PORT || 4200);
app.set("port", PORT);
