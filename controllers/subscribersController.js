let Service = require("../services");

const getSubscribers = (res) => {
    console.log('controller ')
    Service.SubscribersService.getAllSubscribers(res)
}

const createSubscriber = (data, res) => {
    Service.SubscribersService.insertSubscriber(data,res)
}

const deleteSubscriber = (req, res) => {
    Service.SubscribersService.deleteByID(req)  

};

module.exports = {
    getSubscribers, createSubscriber, deleteSubscriber
}