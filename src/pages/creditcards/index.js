import React, {useState} from 'react';
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import FeaturedCards from '../../components/creditcards/FeaturedCards';
import FeaturedKnowledgeHub from '../../components/creditcards/FeaturedKnowledgeHub';
import EditorsPick from '../../components/creditcards/EditorsPick';

const CreditCardHome = () => {
    const items = [
        {
            key: 1,
            image: '/img/icons/employees.svg',
            title: 'Personal',
            link: '/creditcards/questions'
        },
        {
            key: 2,
            image: '/img/icons/graduated.svg',
            title: 'Students',
            link: '/creditcards/questions'
        },
        {
            key: 3,
            image: '/img/icons/briefcase.svg',
            title: 'Business',
            link: '/creditcards/questions'
        }
    ]
    return(
        <Layout>
            <Hero 
                title="Find the perfect credit card for you" 
                subtitle="Here are the most popular credit card categories"
                imageSrc='/img/creditcard-hero.png'
                blockItems={items}
            />
            <FeaturedCards />
            <FeaturedKnowledgeHub />
            <EditorsPick />
        </Layout>
    )
}

export default CreditCardHome;
