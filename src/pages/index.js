import React from 'react';
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks';
import MaximizeSavings from '../components/MaximizeSavings';
import FeaturedBlogs from '../components/home/FeaturedBlogs';

const HomePage = () => {
    const items = [
        {
            image: '/img/icons/mortgage-copy.svg',
            title: 'Mortgages',
            link: "/mortgages"
        },
        {
            image: '/img/icons/loan.svg',
            title: 'Loans',
            link: "/loans"
        },
        {
            image: '/img/icons/surface1.svg',
            title: 'Credit Cards',
            link: '/creditcards'
        },
        {
            image: '/img/icons/insurance.svg',
            title: 'Insurance',
            link: "/insurance"
        },
        {
            image: '/img/icons/wallet.svg',
            title: 'Banking',
            link: "/banking"
        },
    ]
    return(
        <Layout>
            <Hero 
                title="Guiding you through life's financial journey" 
                subtitle="Compare rates, crunch numbers and get expert guidance for life's pivotal financial moments."
                imageSrc='/img/home-hero-image.png' 
                blockItems={items}
            />
            <HowItWorks/>
            <MaximizeSavings />
            <FeaturedBlogs />
        </Layout>
    )
}

export default HomePage;