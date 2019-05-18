import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/images/home.jpg'

export default class Footer extends Component {
  setFormat = price => {
    if (typeof price !== 'undefined') {
      return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    } else {
      return '0'
    }
  }
  render () {
    const property = this.props.data
    console.log(property.price)
    return (
      <div className='col-sm-4 property-item'>
        <div className='card'>
          <div>
            <img className='card-img-top' src={Home} alt='Card cap' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              Propietario {property.name} {property.lastname}
            </h5>
            <h4 className='subtitle-card'>Datos del propietario:</h4>
            <div>
              <b>Email:</b> {property.email}
            </div>
            <div>
              <b>Télefono:</b> {property.phone}
            </div>
            <hr />
            <p className='card-text'>Dirección propiedad: {property.address}</p>

            <h5 className='card-title price'>
              Precio: $ {this.setFormat(property.price)}
            </h5>
            <Link to={'/propertys/' + property._id} className='btn btn-primary'>
              Editar
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
