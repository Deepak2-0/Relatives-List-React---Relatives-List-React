import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["deepak", "gadha", "bewakuff"];
    return (
      <>
        <ol key="relativelist">
          {relatives.map((relative, index) => (
            <li key={"relativeListItem" + (index + 1)}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
