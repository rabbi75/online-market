/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Table, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //console.log("result", data);

  async function deleteOperation(id) {
    //alert(id);
    let result = await fetch("http://localhost:8000/api/delete-product/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/product");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
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
              <th>Action</th>
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
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Danger
                  </Button>
                  <Link variant="danger" to={"/update/" + item.id}>
                    <sapn className="update">Update</sapn>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
}
