
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
  console.log('Connected to MongoDb server (find)');

  const db = client.db();

  //  Query data


  // db.collection('Todos').find({
  //   completed: false
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //   docs
  // }, (err) => {
  //   console.log('Unable to fetch tdoos', err);
  // });


  // db.collection('Todos').find({
  //   _id: new ObjectID('5b839d90b065c908c43ab2fa')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //   docs
  // }, (err) => {
  //   console.log('Unable to fetch tdoos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);  
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({age: 30}).toArray().then((docs) => {
    console.log('Users with age 30:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  client.close();
})