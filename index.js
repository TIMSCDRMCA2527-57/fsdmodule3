// console.log("Hello")

// setTimeout(() => {
//     console.log("Task compelted")
// },3000)
// console.log("bye")




// text.js
// const fs = require("fs")
// fs.writeFileSync("text.txt","Hello this is sample file.")
// console.log("File created.")




// Math.js
// const math = require("./math")
// console.log(math.add(2,4))
// console.log(math.multi(2,4))





// const express = require("express")
// const cors =require("cors")
// const app = express()
// const tasks = [
//     {id:1,task:"Study"},
//     {id:2,task:"Revision"}

// ]
// app.get("/tasks", (req,res) => {
//     res.json(tasks)
// })
// app.listen(3000,() =>{
//     console.log("server running on port 3000")
// })







// function palceOrder(orderID,callbck){
//     console.log("Order received.Preparing order");
//     callbck();

//     setTimeout(() =>{
//         console.log("Food is read and is your delivery id is:" ,orderID);
//     },3000);
// }

// function notifyUser(){
//     console.log("Order will be ready shortly");
// }

// palceOrder(101,notifyUser)




// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) =>{
//     fs.readFile("index.html",(err,data) => {
//     res.writeHead(200,{"Content-type":"text/html"});
//     res.write(data);
//     res.end();
// });
// });

// server.listen(3000 , () => {
//     console.log("Server is at port 3000");
// });


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) =>{
//     if (req.url === "/"){
//         fs.readFile("index.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     if (req.url === "/about"){
//         fs.readFile("about.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     if (req.url === "/contact"){
//         fs.readFile("contact.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
// });

// server.listen(3000 , () => {
//     console.log("Server is at port 3000");
// });





const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

let submittedData = {};

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile("register.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }

    else if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            submittedData = querystring.parse(body);

            res.writeHead(302, { Location: "/result" });
            res.end();
        });
    }

    else if (req.url === "/result") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Registration Details</h2>");
        res.write("Name: " + submittedData.name + "<br>");
        res.write("Email: " + submittedData.email + "<br>");
        res.write("Course: " + submittedData.course);
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});


