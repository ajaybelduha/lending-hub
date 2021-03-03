import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import FeaturedMortgages from '../../components/mortgages/FeaturedMortgages'
import MortgageWatch from '../../components/mortgages/MortgageWatch'
import MaximizeSavings from '../../components/MaximizeSavings'
import FeaturedKnowledgeHub from '../../components/mortgages/FeaturedKnowledgeHub'
import EditorsPick from '../../components/creditcards/EditorsPick'

const MortgagesHome = () => {
  const items = [
    {
      key: 1,
      image: '/img/icons/home.svg',
      imageHover: '/img/icons/home_hover.svg',
      title: 'Home Buying',
      link: '/mortgages/questions',
    },
    {
      key: 2,
      image: '/img/icons/mortgage.svg',
      imageHover: '/img/icons/mortgage_hover.svg',
      title: 'Refinancing Mortgage',
      link: '/mortgages/refinance/questions',
    },
    {
      key: 3,
      image: '/img/icons/renewable.svg',
      imageHover: '/img/icons/renewable_hover.svg',
      title: 'Renewal Mortgage',
      link: '/mortgages/refinance/questions',
    },
  ]
  return (
    <Layout>
      <Hero
        title="Let's help you find the best mortgage rate"
        subtitle="We’ll find the best rate for you in under 2 minutes."
        subtitle2="Evaluate Canada’s best mortgage rates in one place. LendingHub's Rate Matrix lets you compare pricing for all key mortgage types and terms."
        imageSrc="/img/mortgages-hero.png"
        blockItems={items}
      />
      <FeaturedMortgages />
      <MortgageWatch />
      <MaximizeSavings />
      <FeaturedKnowledgeHub />
      <EditorsPick type="mortgage" />
    </Layout>
  )
}

export default MortgagesHome
