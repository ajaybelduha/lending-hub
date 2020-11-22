// import React from 'react'

// import Layout from '../../components/Layout'
// import BlogRoll from '../../components/BlogRoll'

// export default class CreditCardsIndexPage extends React.Component {
//   render() {
//     return (
//       <Layout>
//         <div
//           className="full-width-image-container margin-top-0"
//           style={{
//             backgroundImage: `url('/img/blog-index.jpg')`,
//           }}
//         >
//           <h1
//             className="has-text-weight-bold is-size-1"
//             style={{
//               boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
//               backgroundColor: '#f40',
//               color: 'white',
//               padding: '1rem',
//             }}
//           >
//             Latest Stories on Credit Cards
//           </h1>
//         </div>
//         <section className="section">
//           <div className="container">
//             <div className="content">
//               <BlogRoll />
//             </div>
//           </div>
//         </section>
//       </Layout>
//     )
//   }
// }



import React from 'react';
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import HowItWorks from '../../components/home/HowItWorks';
import MaximizeSavings from '../../components/home/MaximizeSavings';
import FeaturedBlogs from '../../components/home/FeaturedBlogs';

const CreditCardHome = () => {

    return(
        <Layout>
            <Hero/>
            <HowItWorks/>
            <MaximizeSavings />
            <FeaturedBlogs />
        </Layout>
    )
}

export default CreditCardHome;
