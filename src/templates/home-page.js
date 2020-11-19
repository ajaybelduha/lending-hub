import React from 'react';
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks';
import MaximizeSavings from '../components/home/MaximizeSavings';

const HomePage = () => {

    return(
        <Layout>
           <Hero/>
           <HowItWorks/>
            <MaximizeSavings />
        </Layout>
    )
}

export default HomePage;