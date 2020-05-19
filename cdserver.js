var http=require('http')
var server=http.createServer();
var child_process=require('child_process')
server.on('request',(req,resp)=>{

    child_process.execFile('./cd.sh',(error,stdout,stderror)=>{
        resp.end("ok...")
        console.log(stdout)
    })
})

server.listen(3000,function () {
    console.log('server start at port 3000')
})
