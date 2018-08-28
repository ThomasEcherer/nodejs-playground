
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var objId = new ObjectID();
console.log(objId);

// Since Version >=3.0 of mongodb, the connect method returns the connected
// client instead of the database. Therefore to get the databse instance
// we need to use 'database.db()'. In the documentation it said 'If not provided
// use database name from connection string'.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to the MongoDB server');
    return;
  }
  console.log('Connected to MongoDb server (delete)');

  const db = client.db();

  //  delete many
  // db.collection('Todos').deleteMany({
  //   text: 'Something to do'
  // }).then((result) => {
  //   console.log(result);
  // });

  //  delete one
  // db.collection('Todos').deleteOne({
  //   text: 'Something to do'
  // }).then((result) => {
  //   console.log(result);
  // })

  //  findOneAndDelete
  db.collection('Todos').findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result);
  })


  client.close();
})