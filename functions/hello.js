const axios = require('axios')

const token = Buffer.from(`${process.env.FUB_API_KEY}`, 'utf8').toString('base64')

module.exports.handler = async function(event, context) {

const data = JSON.parse(event.body)

const config = {
    headers: {
      "X-System":"Lending-Hub-Website",
      "X-System-Key": process.env.X_SYSTEM_KEY,//"de9aebaa38c7fdb24461c1f6bccf0925",
      'Authorization': `Basic ${token}`,
    },
    auth: {
      username: process.env.FUB_API_KEY,
      password: ''
    },
}

let statusCode = 200;

  axios.post('https://api.followupboss.com/v1/events', data, config)
  .then(response => {
    console.log("RESPONSE: ", response);
    statusCode = response.status
  })
  .catch(error => {
    console.log("ERROR OCCURED")
    console.log(error);
    statusCode = 500
  })

  return {
    // return null to show no errorss
    statusCode: statusCode, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
    })
  }
}
