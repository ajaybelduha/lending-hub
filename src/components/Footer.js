import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li className="heading-container">
                      <AniLink paintDrip hex="#000000"to="/about-us" className="navbar-item">
                        About us
                      </AniLink>
                      <hr />
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"to="/about-us" className="navbar-item">
                        About us
                      </AniLink>
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/careers">
                        Careers
                      </AniLink>
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/our-team">
                        Our Team
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li className="heading-container">
                      <AniLink paintDrip hex="#000000"to="/contact-us" className="navbar-item">
                        Help
                      </AniLink>
                      <hr />
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/faq">
                        FAQs
                      </AniLink>
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/blogs">
                        Blog
                      </AniLink>
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/contact-us">
                        Contact Us
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li className="heading-container">
                      <AniLink paintDrip hex="#000000"to="/" className="navbar-item">
                        Legal
                      </AniLink>
                      <hr />
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/terms-and-conditions">
                        Terms of use
                      </AniLink>
                    </li>
                    <li>
                      <AniLink paintDrip hex="#000000"className="navbar-item" to="/privacy-policy">
                        Privacy Policy
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <ul className="menu-list">
                  <li className="heading-container">
                    <AniLink paintDrip hex="#000000"to="/" className="navbar-item">
                      Contact Us
                    </AniLink>
                    <hr />
                  </li>
                  <li>
                    <p>
                      <b>LendingHub.ca Main Office</b> <br />
                      81 Zenway Blvd #25 Woodbridge, ON, L4H 0S5</p>
                        <div>

                        Email: info@lendinghub.ca<br />

                        Office: (416) 607 7000<br />

                        Fax: (805) 606 6200
                    </div>
                  </li>
                </ul>
                <div className="social">
                  <a title="facebook" href="https://www.facebook.com/lendinghub.ca">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com/lendinghub?lang=en">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/lendinghub/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <hr/>
            <div className="rights-reserved mt-4 has-text-centered">
              Brokerage License#: 12566 LendingHub.ca © All Right Reserved 2021
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
