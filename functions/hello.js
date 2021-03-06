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

let data = JSON.parse(event.body)

const req = {
  params: {
    api_key: process.env.PIPELINE_CRM_API_KEY
  }
}

const cfRes = await axios.get('https://api.pipelinecrm.com/api/v3/admin/person_custom_field_labels.json', req, config)


const customFieldsResponse = cfRes.data.entries;
console.log(data)

if (data.person.custom_fields) {
  let customFieldsRequest = data.person.custom_fields;
  let customFieldsRequestArray = Object.keys(customFieldsRequest);

  let obj = {}

  customFieldsRequestArray.map(item => {
    const customData = customFieldsResponse.find(a => a.name === item)
    obj[`custom_label_${customData.id}`] = customFieldsRequest[customData.name]
  })


  data.person.custom_fields = obj;

  console.log("DATAA")
  console.log(data)
}


  try {
    const response = await axios.post(`https://api.pipelinecrm.com/api/v3/people.json?api_key=${process.env.PIPELINE_CRM_API_KEY}`, data, config)
    console.log("RESPONSE ID: ", response.data.id);
    if (response.status == 200) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          status: response.statusCode,
          data: response.data,
          msg: `Successfully ${response.statusText} to Pipeline CRM`,
        })
      }
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          status: response.statusCode,
          data: response.data,
          msg: `Please try again!`,
        })
      }
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
