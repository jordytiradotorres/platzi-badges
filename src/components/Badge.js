import React, { Component } from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends Component {
  render() {
    const { firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          {/* <div>@{this.props.twitter}</div> */}
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#platzi</div>
      </div>
    );
  }
}

export default Badge;
