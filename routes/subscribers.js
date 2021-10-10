var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.subscribersController.getSubscribers(res);
})

router.post('/', (req, res) => {
    Controllers.subscribersController.createSubscriber(req.body, res) 
})

router.delete('/:objID', (req, res) => {
    let objID = req.params.objID
    Controllers.subscribersController.deleteSubscriber(objID, res);
});

module.exports = router;