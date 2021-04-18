import { types, PIPELINE_ID, CardCategories, MortgageTypes } from '../utils/constants'

export const submitData = (items, props) => {
  fetch('/.netlify/functions/hello', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'post',
    body: JSON.stringify(items)
  })
    .then(res => res.json())
    .then(response => {
      const selections = props.selections
      const redirect = props.redirectTo
      // navigate(redirect, {
      //   state: { selections },
      // });
    })
    .catch(error => {
      console.log('Error while submitting data')
      console.log(error)
    })
}

export const createPipelineContent = (props, values, formValues) => {
  let tagId = 4305274
  let subTag = 4307812
  if (props.type === types.CREDITCARD) {
    tagId = PIPELINE_ID.credit_card_tag
    subTag = undefined
  } else if (props.type === types.MORTGAGE) {
    tagId = PIPELINE_ID.mortgage_tag
    if (formValues.mortgageType === MortgageTypes.HOME_BUYING) {
      subTag = PIPELINE_ID.home_buying_tag
    } else if (formValues.mortgageType === MortgageTypes.RENEWAL) {
      subTag = PIPELINE_ID.renewal_tag
    } else {
      subTag = PIPELINE_ID.refinance_tag
    }
  }

  // Submit data to pipeline CRM and redirect
  const data = {
    person: {
      first_name: values.name,
      last_name: values.lastname,
      phone: values.phone,
      website: 'https://www.lendinghub.ca',
      email: values.email,
      type: 'Lead',
      lead_status_id: PIPELINE_ID.lead_status_id,
      lead_source_id: PIPELINE_ID.lead_source_id,
      next_entry_name: 'From LendingHub Website',
      predefined_contacts_tag_ids: [tagId, subTag], // Credit Card, Mortgage, Loans, Insurance => 4305274, 4305275, 4305276, 4305277
      custom_fields: formValues
    }
  }

  return data
}
