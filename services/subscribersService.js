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
        console.log('Subscriber Added', result)
        res.send({ result: 200 })
    })
}

const deleteByID = (subscriber, res) => {
    console.log(subscriber)
    var ObjectId = require('mongodb').ObjectId;
    objID = new ObjectId(subscriber); // Convert string to mongoDB ObjectID format.
    subscribersCollection.deleteOne({ _id: objID }, (err, result) => {
        console.log('Subscriber Deleted', result.deletedCount)
        // res.send({ result: 200 })
    })
}



module.exports = {
    getAllSubscribers, insertSubscriber, deleteByID
}