import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        //console.warn(result);
        this.setState({ list: result });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((resp) => {
      resp.json().then((result) => {
        alert("Data has been DELETED successfully.");
        this.getData();
      });
    });
  }

  render() {
    return (
      <div>
        <NavbarMenu />
        <Container>
          <h1>Restaurant List</h1>
          {this.state.list ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}</td>
                      <td>
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} color="blue" />
                        </Link>
                        <span
                          onClick={() => {
                            this.delete(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} color="red" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>Please wait...</p>
          )}
        </Container>
      </div>
    );
  }
}

export default RestaurantList;
