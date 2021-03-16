import React, { Component } from "react";
import { Button } from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      email: null,
      rating: null,
      id: null,
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/restaurant/" + this.props.match.params.id
    ).then((resp) => {
      resp.json().then((result) => {
        //console.log(result);
        this.setState({
          name: result.name,
          address: result.address,
          email: result.email,
          rating: result.rating,
          id: result.id,
        });
      });
    });
  }

  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        alert("Restaurant has been UPDATED successfully.");
        this.setState({
          name: "",
          email: "",
          address: "",
          rating: "",
        });
      });
    });
  }

  render() {
    //console.log(this.props.match.params.id);
    //console.log(this.state.name);
    return (
      <div>
        <NavbarMenu />
        <h1>Restaurant Update</h1>
        <div>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            value={this.state.name}
            placeholder="Restaurant Name"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            value={this.state.address}
            placeholder="Restaurant Adderess"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            value={this.state.email}
            placeholder="Restaurant Email"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            value={this.state.rating}
            placeholder="Ratings"
          />
          <br />
          <br />
          <Button
            variant="primary"
            onClick={() => {
              this.update();
            }}
            type="submit"
            value="submit"
          >
            Update Restaurant
          </Button>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;
