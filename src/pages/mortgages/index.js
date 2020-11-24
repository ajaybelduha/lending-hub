import React from 'react';
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import FeaturedCards from '../../components/creditcards/FeaturedCards';
import MaximizeSavings from '../../components/MaximizeSavings';
import FeaturedKnowledgeHub from '../../components/creditcards/FeaturedKnowledgeHub';
import EditorsPick from '../../components/creditcards/EditorsPick';

const MortgagesHome = () => {
    const items = [
        {
            image: '/img/icons/home.svg',
            title: 'Home Buying'
        },
        {
            image: '/img/icons/mortgage.svg',
            title: 'Refinancing Mortgage'
        },
        {
            image: '/img/icons/renewable.svg',
            title: 'Renewal Mortgage'
        }
    ]
    return(
        <Layout>
            <Hero 
                title="Let's help you find the best mortgage rate" 
                subtitle="We’ll find the best rate for you in under 2 minutes."
                imageSrc='/img/mortgages-hero.png'
                blockItems={items}
            />
            <FeaturedCards />
            <MaximizeSavings />
            <FeaturedKnowledgeHub />
            <EditorsPick />
        </Layout>
    )
}

export default MortgagesHome;