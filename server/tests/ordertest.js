' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
let server = require('../server');
var num
let mongoose = require("mongoose");
let Order = require('../models/orders');
let localhost = 'http://localhost:8080'
chai.should()
chai.use(chaiHttp);

var id

describe('====Order API Testing====', () => {
  describe('/GET Order', () => {
      it('Get Order Listing....', (done) => {
        chai.request(localhost)
            .get('/api/orders')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });


  describe('/POST Order', () => {
        it('Post Order....', (done) => {
          let content = {
            hairStyleId:'String',
            barberId:'String',
            address:'String',
            userId:'String',
            status:'String',
          }
          chai.request(localhost)
              .post('/api/orders')
              .send(content)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('hairStyleId').eql('String');
                done();
              });
        });
    });


    describe('/PUT/:id Customer', () => {
      it('Update Order....', (done) => {
        let content = new Order(
          {
            hairStyleId:'String',
            barberId:'String',
            address:'String',
            userId:'String',
            status:'String'
          }
        )
        content.save((err, book) => {
                chai.request(localhost)
                .put('/api/orders/' + content.id)
                .send({hairStyleId: "test2",barberId: "test2", address:"test2"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('hairStyleId').eql('test2');
                  done();
                });
          });
      });
  });


  describe('/DELETE/:id Orders', () => {
      it('Delete Orders....', (done) => {
        let content = new Order(
          {
            hairStyleId:'String',
            barberId:'String',
            address:'String',
            userId:'String',
            status:'String'
          }
        )
        content.save((err, book) => {
                chai.request(localhost)
                .delete('/api/orders/' + content.id)
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
