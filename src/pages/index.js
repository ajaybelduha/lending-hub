import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks'
import MaximizeSavings from '../components/MaximizeSavings'
import FeaturedBlogs from '../components/home/FeaturedBlogs'

const HomePage = () => {
  const items = [
    {
      image: '/img/icons/mortgage-copy.svg',
      imageHover: '/img/icons/home-3_hover.svg',
      title: 'Mortgages',
      link: '/mortgages',
    },
    {
      image: '/img/icons/surface1.svg',
      imageHover: '/img/icons/surface1_hover.svg',
      title: 'Credit Cards',
      link: '/creditcards',
    },
    {
      image: '/img/icons/insurance.svg',
      imageHover: '/img/icons/insurance_hover.svg',
      title: 'Insurance',
      link: '/insurance',
    },
  ]
  return (
    <Layout>
      <Hero
        title="Guiding you through life's financial journey"
        subtitle="Compare rates, crunch numbers and get expert guidance for life's pivotal financial moments."
        subtitle2="LendingHub helps you compare rates from more providers than anyone else"
        imageSrc="/img/home-hero-image.png"
        blockItems={items}
      />
      <HowItWorks />
      <MaximizeSavings />
      <FeaturedBlogs />
    </Layout>
  )
}

export default HomePage
