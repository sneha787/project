import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch: "",
    };
  }
  search(key) {
    //console.warn(key);

    this.setState({ lastSearch: key });

    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
      data.json().then((result) => {
        //console.warn(result);
        if (result.length > 0) {
          this.setState({ searchData: result, noData: null });
        } else {
          this.setState({ noData: true, searchData: null });
        }
        // this.setState({searchData:result})
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((resp) => {
      resp.json().then((result) => {
        alert("Data has been DELETED successfully.");
        this.search(this.state.lastSearch);
      });
    });
  }

  render() {
    return (
      <div>
        <NavbarMenu />
        <Container>
          <h1>Restaurant Search</h1>
          <Form.Control
            type="text"
            onChange={(event) => {
              this.search(event.target.value);
            }}
            placeholder="&#128269; Search Restaurant here..."
            autoFocus
          />
          <div style={{ marginTop: "20px" }}>
            {this.state.searchData ? (
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
                    {this.state.searchData.map((item) => (
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
            ) : null}
            {this.state.noData ? <h3>No Data Found</h3> : null}
          </div>
        </Container>
      </div>
    );
  }
}

export default RestaurantSearch;
