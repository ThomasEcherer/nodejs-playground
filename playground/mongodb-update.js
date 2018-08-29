
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
  console.log('Connected to MongoDb server (update)');

  const db = client.db();

  //  Update one item (http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOneAndUpdate)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b85219e3e61053bbc523793')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b83a5be85b03d1dfc1d7000')
  }, {
    $set: {
      name: 'Henry Schwarz'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
})