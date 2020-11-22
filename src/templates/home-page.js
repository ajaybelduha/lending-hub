import React from 'react';
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks';
import MaximizeSavings from '../components/home/MaximizeSavings';
import FeaturedBlogs from '../components/home/FeaturedBlogs';

const HomePage = () => {

    return(
        <Layout>
            <Hero/>
            <HowItWorks/>
            <MaximizeSavings />
            <FeaturedBlogs />
        </Layout>
    )
}

export default HomePage;