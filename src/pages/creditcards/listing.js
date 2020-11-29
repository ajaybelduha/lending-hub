import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Dropdown from '../../components/Dropdown';
import CardBlock from '../../components/creditcards/CardBlock';

const CCListing = () => {
    return (
        <CCListingContainer>
            <Layout>
                <div className="container">
                    <h1 className="section-title">Recommended cards for you</h1>
                    <h4 className="section-subtitle">Based on your answers, we’ve provided the top matches for you to compare below. Review and select the one that best matches your needs.</h4>
                    <div className="filters-container">
                        <Dropdown default="Travel" />
                        <Dropdown default="No Annul Fee" />
                        <Dropdown default="Welcome Bonus" />
                        <Dropdown default="Low to High" />
                    </div>
                    <div className="cards-container">
                        <CardBlock />
                        <CardBlock />
                    </div>
                </div>
            </Layout>
        </CCListingContainer>
    )
}

const CCListingContainer = styled.div`
    .filters-container {
        margin-top: 50px;
        display: flex;
    }
    .cards-container {
        margin-top: 2rem;
    }
`

export default CCListing;