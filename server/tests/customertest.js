' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
let server = require('../server');
var num
let mongoose = require("mongoose");
let Customer = require('../models/customers');
let localhost = 'http://localhost:8080'
chai.should()
chai.use(chaiHttp);

var id

describe('====Customer API Testing====', () => {
  describe('/GET Customer', () => {
      it('Get Customer Listing....', (done) => {
        chai.request(localhost)
            .get('/api/customers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });


  describe('/POST Customer', () => {
        it('Post Customer....', (done) => {
          let content = {
              role: "user",
              fullName: "testingUser",
              email: "test@test.com",
              username:"testingUser",
              password:"password",
              memberId:"test"
          }
          chai.request(localhost)
              .post('/api/customers')
              .send(content)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('fullName').eql('testingUser');
                done();
              });
        });
    });


    describe('/PUT/:id Customer', () => {
      it('Update Customer....', (done) => {
        let content = new Customer(
          {
              role: "user",
              fullName: "testingUser",
              email: "test@test.com",
              username:"testingUser",
              password:"password",
              memberId:"test"
          }
        )
        content.save((err, book) => {
                chai.request(localhost)
                .put('/api/customers/' + content.id)
                .send({role: "test2",fullName: "test2", email:"test2"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('fullName').eql('test2');
                  done();
                });
          });
      });
  });


  describe('/DELETE/:id Customer', () => {
      it('Delete Customer....', (done) => {
        let content = new Customer(
          {
              role: "user",
              fullName: "testingUser",
              email: "test@test.com",
              username:"testingUser",
              password:"password",
              memberId:"test"
          }
        )
        content.save((err, book) => {
                chai.request(localhost)
                .delete('/api/customers/' + content.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                  done();
                });
          });
      });
  });

});




///////////////////
