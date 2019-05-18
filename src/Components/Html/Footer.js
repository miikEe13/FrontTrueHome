import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer className='page-footer font-small blue'>
        <div className='footer-copyright text-center py-3'>
          © 2019 Copyright:
          <a href='https://www.truehome.com.mx/'> True Home</a>
        </div>
      </footer>
    )
  }
}
