import React, { Component } from "react";
import Card from "./Card";

interface CatState {
  data: any[]; // Define the type of data property according to your API response
  isLoading: boolean;
  haveError: string;
  info: string;
}

export default class Cat extends Component<{}, CatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      haveError: "",
      info: "",
    };
  }

  componentDidUpdate(prevProp: any, prevState: CatState) {
    if (this.state.data.length !== prevState.data.length) {
      console.log("State 'someState' has changed");
    }
  }

  handleDeletion = (id: number) => {
    const updated_data = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: updated_data, info: "Record Deleted Successfully" });
  };

  componentDidMount(): void {
    this.setState({ isLoading: true });
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({ data: result, isLoading: false });
      })
      .catch((error) => {
        this.setState({ haveError: error, isLoading: false });
      });
  }

  render() {
    return (
      <>
        <h1 className="main-heading">SpaceX's Rocket List</h1>
        <div className="main-content">
          {!this.state.data.length && <p>No Data Found.</p>}
          {this.state.info && <p className="info">{this.state.info}</p>}
          {this.state.haveError && <p>{this.state.haveError}</p>}
          {this.state.isLoading && <p>Loading</p>}
          {this.state.data.map((item) => (
            <Card
              key={item.id}
              data={item}
              deleteHandler={this.handleDeletion}
            />
          ))}
        </div>
      </>
    );
  }
}
