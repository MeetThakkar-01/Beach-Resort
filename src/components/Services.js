import React, { Component } from "react";
import Title from "./Title";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer,
  FaAccessibleIcon,
} from "react-icons/fa";
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Coctails",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum!",
      },
      {
        icon: <FaBeer />,
        title: "Strongestt Beer",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
