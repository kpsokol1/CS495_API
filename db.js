const uri = 'mongodb+srv://kpsokol1:1oQ4naFb5MYmG97G@cs495.odlc8ws.mongodb.net/db?retryWrites=true&w=majority';
const {MongoClient} = require('mongodb');
let client;
async function dbOpen() {
  client = new MongoClient(uri);
  try {
    // Connect to the MongoDB cluster
    await client.connect(uri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
    await client.close();
  }
}
async function dbClose() {
  await client.close();
}

//Print the names of all available databases
async function listDatabases(client) {
  let databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function queryDatabase(databaseName, collectionName,query){
  try{
    await dbOpen();
    const cursor = await client.db(databaseName).collection(collectionName).find(query);
    const result = await cursor.toArray();
    //console.log(result);
    return result;
  }catch(e){
    console.error(e);
  }
  finally {
    dbClose();
    console.log("Disconnected from MongoDB");
  }
}

module.exports = {queryDatabase};