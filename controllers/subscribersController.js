let Service = require("../services");

const getSubscribers = (res) => {
    console.log('controller ')
    Service.SubscribersService.getAllSubscribers(res)
}

const createSubscriber = (data, res) => {
    Service.SubscribersService.insertSubscriber(data, res)
}

const deleteSubscriber = (req, res) => {
    console.log(req)
    Service.SubscribersService.deleteByID(req)
    res.json({ statusCode: 200, message: 'Successfully Deleted!' })
}

module.exports = {
    getSubscribers, createSubscriber, deleteSubscriber
}