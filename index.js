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





const express = require("express")
const cors =require("cors")
const app = express()
const tasks = [
    {id:1,task:"Study"},
    {id:2,task:"Revision"}

]
app.get("/tasks", (req,res) => {
    res.json(tasks)
})
app.listen(3000,() =>{
    console.log("server running on port 3000")
})