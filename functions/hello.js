const axios = require('axios')

const token = Buffer.from(`${process.env.FUB_API_KEY}`, 'utf8').toString('base64')

module.exports.handler = async function(event, context) {

  const config = {
    headers: {
      "Accept": '*/*',
      "Accept-Encoding": 'gzip, deflate, br',
      'Content-Type': 'application/json',
      "Connection": 'keep-alive'
    }
}

// const data = JSON.parse(event.body)

const req = {
  params: {
    api_key: 'Ixdy528xA3KLqzbB4K1'
  }
}


axios.get('https://api.pipelinecrm.com/api/v3/admin/person_custom_field_labels.json', req, config)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log('error')
  console.log(err)
})







//   try {
//     const response = await axios.post('https://api.followupboss.com/v1/events', data, config)
//     console.log("RESPONSE: ", response);
//     return {
//       statusCode: response.status,
//       body: JSON.stringify({
//         msg: `Successfully ${response.statusText} to followupboss`,
//       })
//     }
//   } catch(error) {
//     console.log("ERROR OCCURED")
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         msg: "Error occured: " + JSON.stringify(error),
//       })
//     }
//   }
}
