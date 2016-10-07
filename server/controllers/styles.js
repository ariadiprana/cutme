module.exports = {
  display: display
}


function display(req, res, next){
  var url = "localhost:8080"
  var data = null

  if(req.params.type == 1){ // MAN STYLE
    data = [
      {
        "id":1,
        "file":url + '/images/man-hairstyles/1.jpg',
        "name":"Hair #1",
        "price":100000,
        "rating":4
      },{
        "id":2,
        "file":url + '/images/man-hairstyles/2.jpg',
        "name":"Hair #2",
        "price":23000,
        "rating":3
      },{
        "id":3,
        "file":url + '/images/man-hairstyles/3.jpg',
        "name":"Hair #3",
        "price":150000,
        "rating":4
      },{
        "id":4,
        "file":url + '/images/man-hairstyles/4.jpg',
        "name":"Hair #4",
        "price":80000,
        "rating":5
      },{
        "id":5,
        "file":url + '/images/man-hairstyles/5.jpg',
        "name":"Hair #5",
        "price":50000,
        "rating":4
      },{
        "id":6,
        "file":url + '/images/man-hairstyles/6.jpg',
        "name":"Hair #6",
        "price":100000,
        "rating":4
      },{
        "id":7,
        "file":url + '/images/man-hairstyles/7.jpg',
        "name":"Hair #7",
        "price":100000,
        "rating":4
      },{
        "id":8,
        "file":url + '/images/man-hairstyles/8.jpg',
        "name":"Hair #8",
        "price":90000,
        "rating":4
      },{
        "id":9,
        "file":url + '/images/man-hairstyles/9.jpg',
        "name":"Hair #9",
        "price":75000,
        "rating":4
      },{
        "id":10,
        "file":url + '/images/man-hairstyles/10.jpg',
        "name":"Hair #10",
        "price":75000,
        "rating":4
      }
    ]
  } else { // WOMAN STYLE
    data = [
      {
        "id":1,
        "file":url + '/images/woman-hairstyles/1.jpg',
        "name":"Hair #1",
        "price":100000,
        "rating":4
      },{
        "id":2,
        "file":url + '/images/woman-hairstyles/2.jpg',
        "name":"Hair #2",
        "price":23000,
        "rating":3
      },{
        "id":3,
        "file":url + '/images/woman-hairstyles/3.jpg',
        "name":"Hair #3",
        "price":150000,
        "rating":4
      },{
        "id":4,
        "file":url + '/images/woman-hairstyles/4.jpg',
        "name":"Hair #4",
        "price":80000,
        "rating":5
      },{
        "id":5,
        "file":url + '/images/woman-hairstyles/5.jpg',
        "name":"Hair #5",
        "price":50000,
        "rating":4
      },{
        "id":6,
        "file":url + '/images/woman-hairstyles/6.jpg',
        "name":"Hair #6",
        "price":100000,
        "rating":4
      },{
        "id":7,
        "file":url + '/images/woman-hairstyles/7.jpg',
        "name":"Hair #7",
        "price":100000,
        "rating":4
      },{
        "id":8,
        "file":url + '/images/woman-hairstyles/8.jpg',
        "name":"Hair #8",
        "price":90000,
        "rating":4
      },{
        "id":9,
        "file":url + '/images/woman-hairstyles/9.jpg',
        "name":"Hair #9",
        "price":75000,
        "rating":4
      },{
        "id":10,
        "file":url + '/images/woman-hairstyles/10.jpg',
        "name":"Hair #10",
        "price":75000,
        "rating":4
      }
    ]
  }
  res.json(data)
}
