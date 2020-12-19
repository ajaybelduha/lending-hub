import React from 'react'
import styled from 'styled-components'
import { BlackButtonLink } from '../../components/common/common'
import Image from 'gatsby-image';

const MortgageBlock = ({mortgages}) => {
    console.log("Mortgage Listings")
    const item = mortgages.node.frontmatter;
    console.log(item)
    return(
        <MortgageBlockContainer>
           <div className="mortgage-details">
               <div className="provider">
                   <div className="icon-text">
                        <Image fixed={item.logo.childImageSharp.fixed} />
                       <h3 className="name title-24-nb">{item.title}</h3>
                   </div>
               </div>
               <div className="rate">{item.fixed._1}%</div>

               <div className="monthly-payment">$1,783/mo</div>
               <div className="action">
                    <BlackButtonLink to="/">Apply Now</BlackButtonLink>
                </div>
           </div>
           <hr />
        </MortgageBlockContainer>
    )
}


const MortgageBlockContainer = styled.div`
    hr {
        background-color: #1C1C1E;
        height: 1px;
    }
    .mortgage-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-text {
            display: flex;
            align-items: center;
            .name {
                margin-left: 15px;
            }
        }
        .provider {
            width: 40%;
        }
        .rate {
            width: 20%;
            font-size: 2rem;
        }
        .monthly-payment {
            width: 20%;
            font-size: 1.5rem;
            padding: 0px 3%;
            .item {
                width: 150px;
                .value {

                }
            }
        }
        .action {
            width: 20%;
        }
    }
`

export default MortgageBlock;
