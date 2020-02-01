import React, { Component } from "react";

class BadgeForm extends Component {
  handleClick = e => {
    console.log("buttton was clicked");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              id="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              id="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
