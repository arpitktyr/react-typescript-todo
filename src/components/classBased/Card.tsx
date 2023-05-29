import React, { Component } from "react";
import "./rocket.scss";

interface cardProps {
  data: any;
  deleteHandler: (id: number) => void;
}

export default class Card extends Component<cardProps> {
  render() {
    const { data, deleteHandler } = this.props;
    return (
      <section className="card">
        <div className="left">
          <img
            className="rocket-img"
            src={data?.flickr_images?.[0]}
            alt={data.name}
          />
        </div>
        <div className="right">
          <h2>{data.rocket_name}</h2>
          <p>{data.description}</p>
          <span>{data.country}</span>
          <span>
            - <b>{data.active ? " Active" : " Deactive"}</b>
          </span>
          <p> First Flight : {data.first_flight}</p>

          <p>
            <b>Cost per Launch : </b> {data.cost_per_launch} $
          </p>

          <button className="delete" onClick={() => deleteHandler(data.id)}>
            Delete
          </button>
        </div>
      </section>
    );
  }
}
