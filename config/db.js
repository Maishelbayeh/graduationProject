const mongoose = require("mongoose");
mongoose.set('strictQuery',true);
module.exports.dbb=mongoose.connection('')

// const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newToDo').on('open',()=>{
// console.log('MONGODB connected');


// }).on('error',()=>{
//     console.log('mongo error');
// });

// module.exports=connection;
