import React from 'react'
import { Link } from 'gatsby'
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import github from '../img/github-icon.svg'
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
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '169px' }} />
            </Link>
            <div></div>
            {/* Hamburger menu */}
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/mortgages">
                Mortgages
              </Link>
              <Link className="navbar-item" to="/loans">
                Loans
              </Link>
              <Link className="navbar-item" to="/creditcards">
                Credit Cards
              </Link>
              <Link className="navbar-item" to="/insurance">
                Insurance
              </Link>
              <Link className="navbar-item" to="/banking">
                Banking
              </Link>
              <Link className="navbar-item" to="/blogs">
                Blog
              </Link>
              <Link className="navbar-item" to="/aboutus">
                About Us
              </Link>
              <Link className="navbar-item" to="/contactus">
                Contact Us
              </Link>
              {/* <AniLink paintDrip to="/creditcards">
  Go to Page 4
</AniLink> */}
              <img src={search} alt="Kaldi" style={{ width: '16px', display: 'none' }} />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
