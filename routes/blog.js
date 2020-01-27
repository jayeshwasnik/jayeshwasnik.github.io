const express=require('express');
const controller=require('./../controller/blogController.js')

let setRoute=(app)=>{
app.get('/hello', controller.helloWorldfunction);
app.get('/example', controller.exampleFunction);
}

module.exports={
	setRoute:setRoute
}