import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signUp(e) {
    //console.log(name, email, password);
    let item = { name, email, password };
    //console.log(item);
    let result = await fetch("http://localhost:8000/api/user", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    //console.log("resutl", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3 mt-4">
        <Container>
          <h1>Register Page</h1>
          <Form className="mt-4">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="dark" onClick={signUp}>
              Sign Up
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
}
