import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      email: null,
      rating: null,
    };
  }

  create() {
    // console.warn(this.state);

    fetch("http://localhost:3000/restaurant/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.warn(result);
        alert("Restaurant has been ADDED successfully.");
      });
    });
  }

  render() {
    return (
      <Form>
        <NavbarMenu />
        <h1>Add New Restaurant</h1>
        <div>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurant Name"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Restaurant Adderess"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Restaurant Email"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="Ratings"
          />
          <br />
          <br />
          <Button
            variant="primary"
            onClick={() => {
              this.create();
            }}
            type="submit"
          >
            <FontAwesomeIcon icon={faUtensils} /> Add Restaurant
          </Button>
        </div>
      </Form>
    );
  }
}

export default RestaurantCreate;
