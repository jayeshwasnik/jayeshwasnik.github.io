const express=require('express')

let helloWorldFunction=(req, res) => res.send('Hello World!');
let exampleFunction=(req, res) => res.send('example World!');


module.exports={helloWorldfunction:helloWorldFunction,
				exampleFunction:exampleFunction	}