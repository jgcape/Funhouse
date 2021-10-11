let client = require("../dbConnect");
let subscribersCollection;
setTimeout(() => {
    subscribersCollection = client.mongoClient.db("Funhouse").collection("subscribers");

}, 2000)

const getAllSubscribers = (res) => {
    subscribersCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
}

const insertSubscriber = (subscriber, res) => {    
    subscribersCollection.insertOne(subscriber, (err, result) => {        
        res.send({ result: 200 });
    })
}

const deleteByID = (subscriber, res) => {
    console.log("Deleting user with objectID: "+ subscriber)
    var ObjectId = require('mongodb').ObjectId;
    objID = new ObjectId(subscriber); // Convert stringified ID to mongoDB ObjectID format.
    subscribersCollection.deleteOne({ _id: objID }, (err, result) => {        
        console.log('Number of subscribers deleted:', result.deletedCount)              
    })
}

module.exports = {
    getAllSubscribers, insertSubscriber, deleteByID
}