import React, { Component } from 'react'
import { api_url } from '../utils/Url'
import hero from '../assets/images/hero.jpg'
import { Redirect } from 'react-router-dom'

export default class Property extends Component {
  state = {
    loading: true,
    error: null,
    property: null,
    propertyName: '',
    propertyLastname: '',
    propertyEmail: '',
    propertyPhone: '',
    propertyAddress: '',
    propertyPrice: '',
    message: '',
    redirect: false
  }

  componentDidMount () {
    this.loadPropertys()
  }
  loadPropertys = () => {
    const url = api_url + 'propertys/' + this.props.match.params.id
    console.log('loading property')
    this.setState({
      loading: true,
      error: null
    })
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          property: data,
          propertyName: data.data.name,
          propertyLastname: data.data.lastname,
          propertyEmail: data.data.email,
          propertyPhone: data.data.phone,
          propertyAddress: data.data.address,
          propertyPrice: data.data.price
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        })
      })
  }
  onChangeInput = e => {
    console.log(e.target.value)
    /* if (e.target.name === 'propertyPrice') {
      let number = Number(e.target.value)
      console.log(typeof number)
      this.setState({ [e.target.name]: [number] })
    } else {
      this.setState({ [e.target.name]: [e.target.value] })
    } */
    this.setState({ [e.target.name]: [e.target.value] })
  }

  handlSubmit = e => {
    e.preventDefault()

    console.log(this.state)

    const API_UPDATE = `${api_url}propertys/${this.props.match.params.id}`

    fetch(API_UPDATE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.propertyName,
        lastname: this.state.propertyLastname,
        email: this.state.propertyEmail,
        phone: this.state.propertyPhone,
        address: this.state.propertyAddress,
        price: this.state.propertyPrice
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          message: data.message,
          redirect: true
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        })
      })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    const {
      loading,
      property,
      propertyName,
      propertyLastname,
      propertyEmail,
      propertyPhone,
      propertyAddress,
      propertyPrice
    } = this.state
    console.log(property)
    return (
      <div>
        <div
          className='hero'
          style={{
            backgroundImage: `linear-gradient(rgba(0,123,255,.5), rgba(40, 167, 69, 0.45)), url(${hero})`
          }}
        >
          <h1 className='title-view-form'>Editar propiedad inmobiliaria</h1>
        </div>
        <div className='row'>
          <div className='col-8 wrapper-form'>
            {!loading && property && (
              <form onSubmit={this.handlSubmit}>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='name'>Nombre propietario</label>
                    <input
                      type='text'
                      required
                      className='form-control'
                      name='propertyName'
                      id='name'
                      value={propertyName}
                      placeholder='Nombre'
                      onChange={this.onChangeInput}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='lastname'>Apellido propietario</label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastname'
                      placeholder='lastname'
                      name='propertyLastname'
                      value={propertyLastname}
                      onChange={this.onChangeInput}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='email'>Email propietario</label>
                    <input
                      type='email'
                      className='form-control'
                      name='propertyEmail'
                      id='email'
                      placeholder='Email'
                      value={propertyEmail}
                      onChange={this.onChangeInput}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='phone'>Telefono propietario</label>
                    <input
                      type='number'
                      className='form-control'
                      name='propertyPhone'
                      id='phone'
                      placeholder='Telefono'
                      value={propertyPhone}
                      onChange={this.onChangeInput}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='address'>Dirección propiedad</label>
                  <input
                    type='text'
                    className='form-control'
                    name='propertyAddress'
                    id='address'
                    placeholder='Dirección'
                    value={propertyAddress}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='price'>Precio Venta Propiedad $$</label>
                    <input
                      type='number'
                      className='form-control'
                      name='propertyPrice'
                      id='price'
                      placeholder='Precio Venta'
                      value={propertyPrice}
                      onChange={this.onChangeInput}
                    />
                  </div>
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>
                  <i className='material-icons'>save</i> Guardar Cambios
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}
