import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "clearblade-js-client/lib/mqttws31";
import "clearblade-js-client";

const systemKey = "ace6fcb50be2c8949eabb0bfe642";
const systemSecret = "ACE6FCB50BBECBCCF8A29E96B7AA01";

class App extends Component {
  componentDidMount() {
    const cb = new window.ClearBlade();
    cb.init({
      email: "a@a.com",
      password: "a",
      systemKey,
      systemSecret,
      callback: initCallback.bind(this)
    });

    function initCallback() {
      const msg = cb.Messaging(
        { useSSL: true },

        err => {
          if (!err) {
            console.log("subscribe");
            msg.subscribe("corvalent/sensor0", {}, msg => {
              console.log("fooooo", msg);
            });
          } else {
            console.log(err);
          }
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
