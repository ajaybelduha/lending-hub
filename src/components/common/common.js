import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlackButtonLink = styled(props => <Link {...props} />)`
    background-color: #151515;
    color: #FFFFFF;
    width: 100%;
    display: block;
    padding: 0.75rem;
    margin: 1rem 0;
`;

export const UnderlinedLink = styled(props => <Link {...props} />)`
  text-decoration: underline;
  color: #323131;
`;