import React from "react";
import axios from "axios";

const token = Buffer.from(`105ff96b20d21612542057ad11a1cfcd789bae`, 'utf8').toString('base64')

export default axios.create({
  headers: {
    "X-System":"LendingHubTest",
    "X-System-Key":"b7580afbf767e392d752053f98f65683",
    'Authorization': `Basic ${token}`,
    "Access-Control-Allow-Origin": "*"
  }
});