import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import PageLoading from "./../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      erorr: null
    });

    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        erorr: error
      });
    }
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container px-0">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
