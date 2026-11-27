const http=require("http")
const fs=require("fs") 


const server =http.createServer((req,res)=>{
// console.log("hello")
// console.log("hello")

// res.end("hello server ")
// res.end(`<h1>hello</h1>`)
// console.log(req.url)




// if(req.url==="/home"){
//     res.end("this is home page ")
// }


// fs.readFile("index.html","utf-8",(err,data)=>{
//     res.end(data)
// })


if(req.url==="/home"){
    res.end("this is home ")
}

if(req.url==="/about"){
    res.end("this is about ")
}
if(req.url==="/contact"){
    res.end("this is contact ")
}
if(req.url==="/setting"){
    res.end("this is setting ")
}


})


server.listen(8000)