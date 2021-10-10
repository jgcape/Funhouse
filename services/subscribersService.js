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

const deleteByID = async (subscriber, res) => {    
    subscribersCollection.deleteOne({_id: subscriber}).exec();
    console.log("Subscriber deleted");
    return deleted
};


module.exports = {
    getAllSubscribers, insertSubscriber, deleteByID
}