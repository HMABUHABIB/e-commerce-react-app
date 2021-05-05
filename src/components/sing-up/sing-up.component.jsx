import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.compomnent";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SingUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChnage = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have a account</h2>
        <span>Sing up with email and password</span>
        <form className="sing-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChnage}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChnage}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChnage}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChnage}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SING UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SingUp;
