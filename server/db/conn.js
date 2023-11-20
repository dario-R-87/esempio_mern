/*const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dario987:03091202@cluster0.nw0fttu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



var _db;

module.exports = {

 connectToServer: function (callback) {
client.connect();
client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("prova");
    _db=db;
  }, 

  getDb: function () {
    return _db;
  },
};