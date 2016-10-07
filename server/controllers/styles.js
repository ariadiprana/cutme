module.exports = {
  display: display
}


function display(req, res, next){
  var url = "http://localhost:8080"
  var data = null

  if(req.params.type == 1){ // MAN STYLE
    data = [
      {
        "id":1,
        "file":url + '/images/man-hairstyles/1.jpg',
        "name":"Cool Jack",
        "price":100000,
        "rating":4
      },{
        "id":2,
        "file":url + '/images/man-hairstyles/2.jpg',
        "name":"Beckham Wannabe",
        "price":23000,
        "rating":3
      },{
        "id":3,
        "file":url + '/images/man-hairstyles/3.jpg',
        "name":"James Dean",
        "price":150000,
        "rating":4
      },{
        "id":4,
        "file":url + '/images/man-hairstyles/4.jpg',
        "name":"Sexy Maley",
        "price":80000,
        "rating":5
      },{
        "id":5,
        "file":url + '/images/man-hairstyles/5.jpg',
        "name":"Dave Kece",
        "price":50000,
        "rating":4
      },{
        "id":6,
        "file":url + '/images/man-hairstyles/6.jpg',
        "name":"Kim Style",
        "price":100000,
        "rating":4
      },{
        "id":7,
        "file":url + '/images/man-hairstyles/7.jpg',
        "name":"Spike Pitt",
        "price":100000,
        "rating":4
      },{
        "id":8,
        "file":url + '/images/man-hairstyles/8.jpg',
        "name":"Bryan Metal",
        "price":90000,
        "rating":4
      },{
        "id":9,
        "file":url + '/images/man-hairstyles/9.jpg',
        "name":"Classic Tom",
        "price":75000,
        "rating":4
      },{
        "id":10,
        "file":url + '/images/man-hairstyles/10.jpg',
        "name":"Tony Curl",
        "price":75000,
        "rating":4
      }
    ]
  } else { // WOMAN STYLE
    data = [
      {
        "id":1,
        "file":url + '/images/woman-hairstyles/1.jpg',
        "name":"Sleek & Cute",
        "price":100000,
        "rating":4
      },{
        "id":2,
        "file":url + '/images/woman-hairstyles/2.jpg',
        "name":"Messy Edgy",
        "price":125000,
        "rating":3
      },{
        "id":3,
        "file":url + '/images/woman-hairstyles/3.jpg',
        "name":"Cute Sassy",
        "price":150000,
        "rating":4
      },{
        "id":4,
        "file":url + '/images/woman-hairstyles/4.jpg',
        "name":"So What???",
        "price":80000,
        "rating":5
      },{
        "id":5,
        "file":url + '/images/woman-hairstyles/5.jpg',
        "name":"Layered Beauty",
        "price":150000,
        "rating":4
      },{
        "id":6,
        "file":url + '/images/woman-hairstyles/6.jpg',
        "name":"Medium Bob",
        "price":100000,
        "rating":4
      },{
        "id":7,
        "file":url + '/images/woman-hairstyles/7.jpg',
        "name":"Elegant Bride",
        "price":200000,
        "rating":4
      },{
        "id":8,
        "file":url + '/images/woman-hairstyles/8.jpg',
        "name":"Glamz Up Do",
        "price":160000,
        "rating":4
      },{
        "id":9,
        "file":url + '/images/woman-hairstyles/9.jpg',
        "name":"Gorgeous Bride",
        "price":175000,
        "rating":4
      },{
        "id":10,
        "file":url + '/images/woman-hairstyles/10.jpg',
        "name":"Sexy Wave",
        "price":175000,
        "rating":4
      }
    ]
  }
  res.json(data)
}
