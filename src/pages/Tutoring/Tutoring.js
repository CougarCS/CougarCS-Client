import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "./Tutoring.css";
import Tabletop from "tabletop";

//import Tutors from "../../Tutors";
//import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";

const Tutoring = () => {
  const [calData, setCaldata] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: "18r3MI23bdJigjNnNJHGXlXO40g0UxWexv8kOeK5YXt0",
      simpleSheet: true,
      callback: googleData => {
        setCaldata(googleData);
      }
    });
  });
  //let test = console.log(calData);
  //let test = console.log(Tutors);
  return (
    <div className="body">
      <Container fluid>
        <div className="summary">
          <h1>Tutoring</h1>
          <p>
            CougarCS offers weekly tutoring time slots for many of our degree's
            toughest classes. If you need help in your coursework, please do not
            hesitate to reach out to our tutoring team? Email
            tutoring@CougarCS.com with your course code (COSC XXXX) in the
            subject line and our tutors will contact you within 24 – 48 hours.
            Note that CougarCS strive to give students an opportunity to seek
            help conceptually from people who have already taken and passed the
            courses they may be struggling with. Please fo not expect out
            volunteer tutors to debug or write your assignments for you.
          </p>
          <p>
            Interested in becoming a tutor? Email our Director of Tutoring,
            Madeleine Wilson, at mfwilson@CougarCS.com!
          </p>
        </div>
        <div>
          <table className="table-bordered">
            <tr>
              <th>COURSES</th>
              <th>MONDAY</th>
              <th>TUESDAY</th>
              <th>WEDNESDAY</th>
              <th>THURSADAY</th>
              <th>FRIDAY</th>
            </tr>
            {calData.map(dataRow => (
              <tr>
                <td>{dataRow.COURSES}</td>
                <td data-toggle="popover" title={dataRow.MONDAY}>
                  {dataRow.MONDAY}
                </td>
                <td data-toggle="popover" title={dataRow.TUESDAY}>
                  {dataRow.TUESDAY}
                </td>
                <td data-toggle="popover" title={dataRow.WEDNESDAY}>
                  {dataRow.WEDNESDAY}
                </td>
                <td data-toggle="popover" title={dataRow.THURSDAY}>
                  {dataRow.THURSDAY}
                </td>
                <td data-toggle="popover" title={dataRow.FRIDAY}>
                  {dataRow.FRIDAY}
                </td>
              </tr>
            ))}
          </table>
          <p className="underTable">
            Tutors will hold their tutoring hours in the CS Lounge on the 5th
            floor of PGH (Room 533, 547, and 563)
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Tutoring;
