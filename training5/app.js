var express=require('express');
var path=require('path');
var app=express();

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));

});

app.get('/Anasayfa',function(req,res){


 res.sendFile(path.join(__dirname+'/Anasayfa.html'));

});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Aradınız Sayfa Yok, Üzgünüm.');
    });

app.listen(8080)