import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from '../img/logo.png'
import search from '../img/search.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            <AniLink paintDrip hex="#000000" to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '169px' }} />
            </AniLink>
            <div></div>
            {/* Hamburger menu */}
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/mortgages">
                Mortgages
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/loans">
                Loans
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/creditcards">
                Credit Cards
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/insurance">
                Insurance
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/banking">
                Banking
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/calculator-types">
                Calculators
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/blogs">
                Blog
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/about-us">
                About Us
              </AniLink>
              <AniLink hex="#000000" paintDrip className="navbar-item" to="/contactus">
                Contact Us
              </AniLink>
              {/* <AniLink paintDrip to="/creditcards">
  Go to Page 4
</AniLink> */}
              <img
                src={search}
                alt="Kaldi"
                style={{ width: '16px', display: 'none' }}
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
