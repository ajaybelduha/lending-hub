export const getTotalMortgageAndCmhc = (price, payment, num_years) => {
  var downpayment_percent = null
  var home_price = Number(price)
  var downpayment = Number(payment)
  if (downpayment >= 1) {
    downpayment_percent = downpayment / home_price
  } else if (downpayment > 0) {
    downpayment_percent = downpayment
    downpayment = home_price * downpayment_percent
  } else {
    return null
  }

  if (
    Number(downpayment_percent.toFixed(2)) < 0.05 ||
    (home_price >= 1000000 && Number(downpayment_percent.toFixed(2)) < 0.2)
  ) {
    return null
  }

  var loan_to_value = 1 - downpayment_percent
  var principal = home_price - downpayment
  var cmhc =
    principal *
    (cmhc_premium(loan_to_value) + cmhc_surcharge(loan_to_value, num_years))
  principal = principal + cmhc

  return {
    principal,
    cmhc,
  }
}

const cmhc_premium = (loan_to_value) => {
  if (loan_to_value < 0.0 || loan_to_value > 0.95) return -1

  if (loan_to_value <= 0.8) {
    return 0.0
  } else if (loan_to_value <= 0.85) {
    return 0.028
  } else if (loan_to_value <= 0.9) {
    return 0.031
  } else if (loan_to_value <= 0.95) {
    return 0.04
  }
}

const cmhc_surcharge = (loan_to_value, num_years) => {
  if (loan_to_value < 0.0 || loan_to_value > 1.0 || num_years < 1) return -1

  if (loan_to_value <= 0.8) {
    return 0.0
  } else {
    if (num_years > 30) return 0.004
    else if (num_years > 25) return 0.002
    else return 0.0
  }
}

const cmhc_rate = (loan_to_value, num_years) => {
  return cmhc_premium(loan_to_value) + cmhc_surcharge(loan_to_value, num_years)
}

const nominal_to_effective = (nominal_rate, periods_per_year) => {
  var effective_rate =
    Math.pow(1 + nominal_rate / periods_per_year, periods_per_year) - 1

  return effective_rate
}

const effective_to_nominal = (effective_rate, periods_per_year) => {
  var nominal_rate =
    periods_per_year * (Math.pow(effective_rate + 1, 1 / periods_per_year) - 1)

  return nominal_rate
}

const annuity_payment = (
  principal,
  annual_rate,
  periods_per_year,
  num_years
) => {
  var total_payments = periods_per_year * num_years
  var periodic_rate = annual_rate / periods_per_year
  var periodic_payment =
    principal *
    (periodic_rate +
      periodic_rate / (Math.pow(1 + periodic_rate, total_payments) - 1))

  return periodic_payment
}

export const can_mortgage_payment = (
  principal,
  annual_rate,
  num_years,
  periods_per_year,
  divisor
) => {
  var effective_rate = nominal_to_effective(annual_rate, 2)
  var nominal_rate = effective_to_nominal(effective_rate, periods_per_year)

  var payment =
    annuity_payment(principal, nominal_rate, periods_per_year, num_years) /
    divisor

  return Math.ceil(payment)
}
