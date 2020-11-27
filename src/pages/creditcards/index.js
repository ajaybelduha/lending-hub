import React from 'react';
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import FeaturedCards from '../../components/creditcards/FeaturedCards';
import FeaturedKnowledgeHub from '../../components/creditcards/FeaturedKnowledgeHub';
import EditorsPick from '../../components/creditcards/EditorsPick';
import QuestionnaireModal from '../../components/creditcards/Questionnaires/QuestionnaireModal';

const CreditCardHome = () => {
    const items = [
        {
            image: '/img/icons/employees.svg',
            title: 'Personal'
        },
        {
            image: '/img/icons/graduated.svg',
            title: 'Students'
        },
        {
            image: '/img/icons/briefcase.svg',
            title: 'Business'
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
            <QuestionnaireModal />
        </Layout>
    )
}

export default CreditCardHome;
