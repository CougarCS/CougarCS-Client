import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Tabletop from 'tabletop';

const Points = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: '1LefsSTpCuHzpWZOp-sVYmL8QRpYO1ilMh_FMHNIhyTc',
      callback: (googleData) => {
        googleData.sort((a, b) =>
          parseInt(a.Points) < parseInt(b.Points)
            ? 1
            : parseInt(a.Points) === parseInt(b.Points)
              ? parseInt(a.Points) < parseInt(b.Points)
                ? 1
                : -1
              : -1
        );
        setData(googleData);
      },
      simpleSheet: true
    });
  });

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              <td>{d.Name}</td>
              <td>{d.Points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Points;
