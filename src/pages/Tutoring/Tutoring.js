import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Tutoring.css";

class Tutoring extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Container fluid>
          <div className="banner"></div>
          <div className="summary">
            <h1>Tutoring</h1>
            <p>
              Exquisite cordially mr happiness of neglected distrusts.
              Boisterous impossible unaffected he me everything. Is fine loud
              deal an rent open give. Find upon and sent spot song son eyes. Do
              endeavor he differed carriage is learning my graceful. Feel plan
              know is he like on pure. See burst found sir met think hopes are
              marry among. Delightful remarkably new assistance saw literature
              mrs favourable. Your it to gave life whom as. Favourable
              dissimilar resolution led for and had. At play much to time four
              many. Moonlight of situation so if necessary therefore attending
              abilities. Calling looking enquire up me to in removal. Park fat
              she nor does play deal our.
            </p>
          </div>
          <div className="calendar">
            <table>
              <tr>
                <td>&nbsp;</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursaday</td>
                <td>Friday</td>
              </tr>
              <tr>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
              </tr>
              <tr>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
              </tr>
              <tr>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
              </tr>
              <tr>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
                <td>Hello</td>
              </tr>
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

export default Tutoring;
