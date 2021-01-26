const axios = require('axios')


// For more info, check https://docs.netlify.com/functions/build-with-javascript
module.exports.handler = async function(event, context) {

  const token = Buffer.from(`105ff96b20d21612542057ad11a1cfcd789bae`, 'utf8').toString('base64')

  axios.create({
    headers: {
      "X-System":"LendingHubTest",
      "X-System-Key":"b7580afbf767e392d752053f98f65683",
      'Authorization': `Basic ${token}`,
      "Access-Control-Allow-Origin": "*"
    }
  });

  let data = {
    "source": "MyAwesomeWebsite2.com",
    "system": "AwesomeSiteBuilder1",
    "type": "General Inquiry1",
    "message": "Looking into a house under $500k in the East Boston area",
    "person": {
        "firstName": "Pravesh",
        "lastName": "Choudhary",
        "emails": [{"value": "pravesh@gmail.com"}],
        "phones": [{"value": "999-555-9999"}]
    }
}

  axios.post('https://api.followupboss.com/v1/events', data)
  .then(response => {
    console.log(response);
    return {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
        data: response
      })
    }
  })
  .catch(error => {
    console.log("ERROR OCCURED")
    console.log(error);
    return {
      // return null to show no errors
      statusCode: 400, // http status code
      body: JSON.stringify({
        msg: "Hello, Error occured "+JSON.stringify(error),
        data: response
      })
    }
  })
}
