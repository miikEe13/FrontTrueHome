import React, { Component } from 'react'
import logo from '../../assets/images/header/log.svg'

export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width='173'
              height='27'
              className='d-inline-block align-top'
              alt=''
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active' />
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
