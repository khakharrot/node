/**console.log("welcome world")

const http = require ("http")
const server = http.createServer ((req,res)=>{ res.write('<h1>Hello Node!!!!</h1>');
res.end()})

server.listen(5000,(err)=>{err? console.log(err):console.log("serveur is running on port:5000")} ) 

 const fs = require ("fs")
 console.log(fs)

  fs.appendFile("welcome.txt","hello node",(err)=>{err? console.log(err): console.log("all is good")})
  fs.readFile('./welcome.txt',{encoding:'utf8'},(err,data)=>{err? console.log(err): console.log('This is the text:',data) })**/