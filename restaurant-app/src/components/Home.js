import React, { Component } from "react";
import NavbarMenu from "./NavbarMenu";
import Imageslider from "./Imageslider";
import Page from "./Page";

class Home extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <Imageslider />
        <h1
          style={{
            marginTop: "20px",
            fontFamily: "cursive",
            color: "royalblue",
          }}
        >
          Welcome to our Restaurant
        </h1>
        {/*  */}
        <Page />
        {/*  */}
      </div>
    );
  }
}

export default Home;
