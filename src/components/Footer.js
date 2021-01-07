import React from 'react'
import { Link } from 'gatsby'

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
            <div>
              <img
                src={logo}
                alt="lending hub logo"
                className="logo"
                style={{ width: '168px' }}
              />
            </div>
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li className="heading-container">
                      <Link to="/" className="navbar-item">
                        About us
                      </Link>
                      <hr />
                    </li>
                    <li>
                      <Link to="/" className="navbar-item">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Press room
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Sitemap
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li className="heading-container">
                      <Link to="/" className="navbar-item">
                        Help
                      </Link>
                      <hr />
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Latest News
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Popular Topics
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li className="heading-container">
                      <Link to="/" className="navbar-item">
                        Legal
                      </Link>
                      <hr />
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Terms of use
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Logo Usage
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <ul className="menu-list">
                  <li className="heading-container">
                    <Link to="/" className="navbar-item">
                      Contact Us
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <p>
                      LendingHub.ca Main Office
                      <br />
                      81 Zenway Blvd #25
                      <br />
                      Woodbridge, ON, L4H 0S5
                    </p>
                  </li>
                </ul>
                <div className="social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
