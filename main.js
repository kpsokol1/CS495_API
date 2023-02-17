const express = require('express');
const databaseLibrary = require("./db");
const app = express();
const PORT = 8080;
const uri = 'mongodb+srv://kpsokol1:1oQ4naFb5MYmG97G@cs495.odlc8ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const {MongoClient} = require('mongodb');

app.use(express.json());
app.listen(
    PORT,
    () => console.log(`I'm alive on http://localhost:${PORT}`)
);

app.get('/tshirt', async (req,res) => {
  let queryResponse = await databaseLibrary.queryDatabase("db","user", {fname: "John"});
  console.log(queryResponse);
  res.status(200).send(
      queryResponse
  );
});

app.post('/tshirt/:id',(req,res) => {
  const {id} = req.params;
  const {logo} = req.body;

  if(!logo){
    res.status(418).send({message: 'We need a logo!'});
  }
  else{
    res.send({
      tshirt: `T-shirt with your ${logo} and ID of ${id}`
    });
  }
});