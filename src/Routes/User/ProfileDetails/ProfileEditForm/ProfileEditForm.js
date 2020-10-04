import React, { Component } from "react";
import "../../../SignUp/Form.css";
import "../../../SignUp/SignUp.css";
import './ProfileEditForm.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  state = {
    firstName: null,
    lastName: null,
    gender: null,
    formErrors: {
      firstName: "",
      lastName: "",
      gender: "",
    },
  };
// bahjbjh
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.submitHandler(this.state);
    } 
    else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characaters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "gender":
        formErrors.gender = value.length < 3 ? "select an option" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  close = () => {
    this.props.closeForm();
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='changeDetailsForm'>
          <i className="fas fa-window-close" onClick={this.close}></i>
          <div>
            <div>
              <h5>Firstname :</h5>
              <br></br>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? "error" : null}
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>

          <div>
            <div>
              <h5>Lastname :</h5>
              <br></br>
              <input
                type="text"
                className={formErrors.lastName.length > 0 ? "error" : null}
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
                required
              />
            </div>
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
    
          <div>
            <div>
              <h5>Gender :</h5>
              <br></br>
              <select
                name="gender"
                onChange={this.handleChange}
                className="custom-select"
              >
                <option value="ge">gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {formErrors.gender.length > 0 && (
              <span className="errorMessage genderError">
                {formErrors.gender}
              </span>
            )}
          </div>

          <button type="submit" class="btn btn-primary">Save</button>
        
        </form>
      </div>
    );
  }
}

export default App;
