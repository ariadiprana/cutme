module.exports = {
  display: display
}


function display(req, res, next){
  var url = "http://localhost:8080"
  var data = null

  data = [{
    "id":1,
    "file":url + '/images/barbers/1.jpg',
    "name":"George Clooney",
    "rating":4
  }, {
    "id":2,
    "file":url + '/images/barbers/2.jpg',
    "name":"Captain America",
    "rating":3
  }, {
    "id":3,
    "file":url + '/images/barbers/3.jpg',
    "name":"Tony Starks",
    "rating":5
  }, {
    "id":4,
    "file":url + '/images/barbers/4.jpg',
    "name":"Audrey Hepburn",
    "rating":5
  }, {
    "id":4,
    "file":url + '/images/barbers/5.jpg',
    "name":"Grace Kelly",
    "rating":3
  }
]
res.json(data)
}
