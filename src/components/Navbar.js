import React from 'react'
import { Link } from 'gatsby'
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
            {/* Hamburger menu */}
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                Mortgages
              </Link>
              <Link className="navbar-item" to="/products">
                Loans
              </Link>
              <Link className="navbar-item" to="/blog">
                Credit Cards
              </Link>
              <Link className="navbar-item" to="/contact">
                Insurance
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Banking
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                About Us
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Contact Us
              </Link>
              <img src={search} alt="Kaldi" style={{ width: '16px' }} />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
