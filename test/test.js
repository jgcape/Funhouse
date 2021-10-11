var expect = require("chai").expect;
var request = require("request");
var app = "http://localhost:8080"
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);



var testID = '61638a667b4dd52c2cb84330';


var chai = require('chai');
var should = chai.should();
var io = require('socket.io-client');

describe("Socket-Server", function () {
    it('Can a user connect to the socket?', function (done) {
        var client = io(app);
        client.on('connect', function (data) {
            done();
        });
    });
});

describe("Check DELETE /subscribers", function () {
    it("Does a successful delete api call return statusCode 200?", function (done) {
        chai.request(app)
            .delete(`/api/subscribers/${testID}`)
            .end(function (err, res) {
                expect(res.body.statusCode).to.equal(200);
                done();
            });
    })
    
    it("Does a successful delete api call send a success message?", function (done) {
        chai.request(app)
            .delete(`/api/subscribers/${testID}`)
            .end(function (err, res) {
                expect(res.body.message).to.equal('Successfully Deleted!');
                done();
            });
    })
});
// describe("Check POSTing new subscribers", function() {
//     it("check api returns fail for unauthorized API trigger", function(done) {
//         chai.request(app)
//             .post('/api/subscribers')
//             .end(function (err, res) {
//                 expect(res.body.statusCode).to.equal(400);               
//                 done();
//         });
//     })
// });