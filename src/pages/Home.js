import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import confLogo from "../images/platziconf-logo.svg";
import astronautas from "../images/astronauts.svg";

const Home = () => {
  return (
    <section className="home container-fluid">
      <div className="home__info">
        <figure>
          <img src={confLogo} alt="conf logo" />
        </figure>
        <h3 className="text-uppercase font-weight-bold text-white">
          Print your badges
        </h3>
        <p className="text-white">The easiest way to manage your conference</p>
        <Link to="/badges" className="btn btn-primary">
          Start now
        </Link>
      </div>

      <div className="home__img">
        <figure>
          <img src={astronautas} alt="Astronautas" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
