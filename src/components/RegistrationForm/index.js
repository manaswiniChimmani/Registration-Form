// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {err1: '', err2: '', isSubmitted: false, firstName: '', lastName: ''}

  handleBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({err1: 'Required'})
    } else {
      this.setState({err1: ''})
    }
  }

  handleBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({err2: 'Required'})
    } else {
      this.setState({err2: ''})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderLastNameField = () => {
    const {lastName, err2} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          onBlur={this.handleBlurLastName}
          id="lastName"
          className="inputs"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
        />
        <p className="err-msg">{err2}</p>
      </>
    )
  }

  renderFirstNameField = () => {
    const {firstName, err1} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          onBlur={this.handleBlurFirstName}
          id="firstName"
          className="inputs"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
        />
        <p className="err-msg">{err1}</p>
      </>
    )
  }

  loginStatus = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.handleBlurFirstName()
    this.handleBlurLastName()
    this.loginStatus()
  }

  getResponse = () => {
    const {isSubmitted} = this.state
    this.setState({isSubmitted: false})
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="h1">Registration</h1>
        {isSubmitted ? (
          <div className="response-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button className="btn" type="button" onClick={this.getResponse}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container1" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstNameField()}</div>
            <div className="input-container">{this.renderLastNameField()}</div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
