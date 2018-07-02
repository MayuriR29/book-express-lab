const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser());
const PORT = 3000;
let books = [
  {
    id:1,
    title: "harry potter",
    summary: "someone dies"
  },
  {
    id:2,
    title: "Game of Thrones",
    summary: "everyone dies"
  }
];
app.get("/books", (req, res) => {
  res.send(books);
});
app.get("/", (req, res) => {
  res.send("hello jumpstart");
});
// app.get("/books/:id", (req, res) => {
//   res.send({
//     const reqBook=books.find(book=>{
//         return book.id==req.params.id
//     })
//     res.send(reqBook);
//   });

// });
//POST books
app.post("/books",(req,res)=>{
  console.log(req.body);
  books=[...books,req.body];
  res.send(books);  
})

app.listen(PORT, () => {
  console.log(`your app has started ${PORT}`);
});
