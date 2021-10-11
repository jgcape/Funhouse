/// Database Connection to mongoDB

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://Julian:2AqyFm67DBkc9VOD@cluster0.vcgos.mongodb.net/Funhouse?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });


mongoClient.connect((err,db) => {
    subscribersCollection = mongoClient.db("Funhouse").collection("subscribers");
     if(!err){
       console.log('Connected to funhouse database.')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = mongoClient;








