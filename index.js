const express=require('express');
const app=express();
const fs=require('fs');
const appConfig=require('./config/appConfig');
const mongoose=require('mongoose');

let routePath='./routes'
fs.readdirSync(routePath).forEach( (file)=>{
	if(~file.indexOf('.js')){
		console.log("we are using"+routePath+'/'+file );
		let route=require(routePath+'/'+file);
		route.setRoute(app);
	}

})
app.listen(appConfig.port, () => {console.log(`Example app listening on port 3000!`)
let db=mongoose.connect(appConfig.db.uri,{useMongoClient:true})


})


/*mongo "mongodb+srv://cluster0-yia1e.mongodb.net/test"  --username jayesh*/