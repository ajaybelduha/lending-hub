import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks'
import MaximizeSavings from '../components/MaximizeSavings'
import FeaturedBlogs from '../components/home/FeaturedBlogs'

const CalculatorTypes = () => {
    const calculators = [
        {
          key: 'mortgage-payment',
          title: 'Mortgage Payment Calculator',
          description: 'Enter your details below to estimate your monthly mortgage payment with taxes, fees.',
          image: '/img/icons/mortgage.svg',
          imageHover: '/img/icons/mortgage_hover.svg',
          link: '/calculator'
        },
        {
          key: 'affordability',
          title: 'Affordability Calculator',
          description: `We'll help you figure out what home price you may be able to afford`,
          image: '/img/icons/loan.svg',
          imageHover: '/img/icons/loan_hover.svg',
          link: '/calculator'
        },
        {
          key: 'land-transfer-tax',
          title: 'Land Transfer Tax Calculator',
          description: 'Our calculator will help to figure out estimate land transfer taxes based on your province and city. First-time home buyers may be eligible for rebates',
          image: '/img/icons/real-estate.svg',
          imageHover: '/img/icons/real-estate_hover.svg',
          link: '/calculator'
        },
        {
          key: 'cmhc-insurance',
          title: 'CMHC Insurance Calculator',
          description: 'The CMHC Mortgage Loan Insurance premium is calculated as a percentage of the loan and is based on the size of your down payment',
          image: '/img/icons/calculator.svg',
          imageHover: '/img/icons/calculator_hover.svg',
          link: '/calculator'
        },
      ]
  return (
        <Layout>
            <Hero
                title="All Calculators"
                subtitle="Here you will find all the mortgage calculators you will even need in the home buying process."
                imageSrc="/img/calculators.jpg"
                blockItems={calculators}
                type='insurance'
            />
        </Layout>
  )
}

export default CalculatorTypes
