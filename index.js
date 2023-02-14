const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 8080;

const uri = 'mongodb+srv://kpsokol1:1oQ4naFb5MYmG97G@cs495.odlc8ws.mongodb.net/?retryWrites=true&w=majority';

async function connect(){
  try{
    await mongoClient.connect(uri);
    console.log("Connected to MongoDB");
  }catch (error){
    console.error(error);
  }
}

connect();

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`I'm alive on http://localhost:${PORT}`)
);

app.get('/tshirt', (req,res) => {
  res.status(200).send({
    id: 1,
    color: 'red'
  })
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
