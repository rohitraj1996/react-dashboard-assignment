import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        username: "",
        password: "",
        email: ""
      }
    }
    console.log(this.state);
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;
    console.log("name", name);
    console.log("value", value);
    console.log("errors", errors);
    switch (name) {
      case "username":
        errors.username = value.length < 5 ? "Username must be 5 characters length" : "";
        break;
      case "password":
        errors.password = value.length < 5 ? "Password must be 5 characters length" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Email must be 5 characters length" : "";
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value}) // multiple input fields
    console.log(this.state);
  }
  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    const {errors} = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <p>Enter your details</p>
        <input type="text" placeholder="Enter your username" name="username" onChange={this.changeHandler}/>
        <p>{errors.username}</p>
        <br/>
        <input type="text" placeholder="Enter your password" name="password" onChange={this.changeHandler}/>
        <p>{errors.password}</p>
        <br/>
        <input type="email" placeholder="Enter your email" name="email" onChange={this.changeHandler}/>
        <p>{errors.email}</p>
        <br/>
        <input type="submit" value="Register"/>
      </form>
    )
  }
}
