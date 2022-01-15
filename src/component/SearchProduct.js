import React, { useState } from "react";
import Header from "./Header";
import { Container, Table } from "react-bootstrap";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

export default function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    if (key.length > 0) {
      let result = await fetch("http://localhost:8000/api/search/" + key);
      result = await result.json();
      //console.log(result);
      setData(result);
    }
  }
  return (
    <div>
      <Header />
      <h1 className="mt-2">Search Product.</h1>
      <div className="col-sm-6 offset-sm-3 mt-4">
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Search"
        />
      </div>
      {data.length > 0 ? (
        <Container fluid>
          <h3 className="mt-4 mb-4">Product List</h3>
          <Table striped bordered hover text-center>
            <thead>
              <tr>
                <th>S/L</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      style={{ width: 100 }}
                      src={
                        "http://localhost:8000/assets/images/" + item.file_path
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : null}
      <Footer />
    </div>
  );
}
