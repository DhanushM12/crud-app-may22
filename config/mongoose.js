const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://127.0.0.1:27017/subscribermay', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
    console.log("Connected to MongoDB")
});


// mongoose.createConnection('mongodb://127.0.0.1:27017/subscribermay').asPromise();
// mongoose.connect('mongodb://127.0.0.1:27017/subscribermay')

// const db = mongoose.connection

// db.on('error', function(){
//     console.log(`Error in connection to MongoDB`)
// })

// db.once('open', function(){
//     console.log("Successfully connected to MongoDB")
// })

// module.exports = db;