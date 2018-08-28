
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
  console.log('Connected to MongoDb server');

  const db = client.db();

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) =>{
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })


  //  Insert new doc into USers(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Maki',
  //   age: 30,
  //   location: 'Germany, Hiesling'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  client.close();
})