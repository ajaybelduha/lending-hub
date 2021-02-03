const axios = require('axios')

const token = Buffer.from(`${process.env.FUB_API_KEY}`, 'utf8').toString('base64')

module.exports.handler = async function(event, context) {

const data = JSON.parse(event.body)

const config = {
    headers: {
      "X-System":"Lending-Hub-Website",
      "X-System-Key": process.env.X_SYSTEM_KEY,
      'Authorization': `Basic ${token}`,
    },
    auth: {
      username: process.env.FUB_API_KEY,
      password: ''
    },
}

  try {
    const response = await axios.post('https://api.followupboss.com/v1/events', data, config)
    console.log("RESPONSE: ", response);
    return {
      statusCode: response.status,
      body: JSON.stringify({
        msg: `Successfully ${response.statusText} to followupboss`,
      })
    }
  } catch(error) {
    console.log("ERROR OCCURED")
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: "Error occured: " + JSON.stringify(error),
      })
    }
  }
}
