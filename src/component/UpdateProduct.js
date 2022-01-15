/* eslint-disable jsx-a11y/alt-text */
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "./Footer";
export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getProduct() {
      let result = await fetch("http://localhost:8000/api/get-product/" + id);
      result = await result.json();
      setData(result);
      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
      setFile(data.file);
    }
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function editProduct(id) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);

    // eslint-disable-next-line no-unused-vars
    let result = await fetch("http://localhost:8000/api/update-product/" + id, {
      method: "POST",
      body: formData,
    });
    alert("Data has been Updated");
  }
  return (
    <>
      <Header />
      <h1 className="mt-4">Update Product.</h1>
      <div className="col-sm-6 offset-sm-3 mt-4">
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          defaultValue={data.name}
          name="name"
          placeholder="Enter Product Name"
        />
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          defaultValue={data.price}
          type="number"
          name="price"
          placeholder="Enter Product Price"
        />
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          defaultValue={data.description}
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
        <br></br>
        <img
          style={{ width: 100 }}
          src={"http://localhost:8000/assets/images/" + data.file_path}
        />
        <br></br>
        <Button
          onClick={() => editProduct(data.id)}
          className="mt-4"
          variant="dark"
        >
          Update Product
        </Button>
      </div>
      <Footer />
    </>
  );
}
