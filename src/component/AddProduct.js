import React, { useState } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  async function addProduct() {
    console.log(name, price, description, file);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);

    // eslint-disable-next-line no-unused-vars
    let result = await fetch("http://localhost:8000/api/add-product", {
      method: "POST",
      body: formData,
    });
    alert("Data has been saved");
  }

  return (
    <div>
      <Header />
      <h1 className="mt-2">This is AddProduct component.</h1>
      <div className="col-sm-6 offset-sm-3 mt-4">
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          name="name"
          placeholder="Enter Product Name"
        />
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          type="number"
          name="price"
          placeholder="Enter Product Price"
        />
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          type="text"
          name="description"
          placeholder="Enter Description"
        />
        <br />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          type="file"
          name="file"
        />

        <Button className="mt-4" variant="dark" onClick={addProduct}>
          Add Product
        </Button>
      </div>
      <Footer />
    </div>
  );
}
