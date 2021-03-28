import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks'
import MaximizeSavings from '../components/MaximizeSavings'
import FeaturedBlogs from '../components/home/FeaturedBlogs'

const CalculatorTypes = () => {
    const items = [
        {
            key: 'mortgage-payment',
            title: 'Payment Calculator',
            link: '/calculator',
        },
        {
            key: 'affordability',
            title: 'Affordability Calculator',
            link: '/calculator',
        },
        {
            key: 'land-transfer-tax',
            title: 'Land Transfer Tax Calculator',
            link: '/calculator',
        },
        {
            key: 'cmhc-insurance',
            title: 'Insurance Calculator',
            link: '/calculator',
        },
    ]
    return (
        <Layout>
            <Hero
                title="All Calculators"
                subtitle="Here you will find all the mortgage calculators you will even need in the home buying process."
                imageSrc="/img/calculators.jpg"
                blockItems={items}
            />
        </Layout>
    )
}

export default CalculatorTypes
