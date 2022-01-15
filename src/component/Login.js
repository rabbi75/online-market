import Header from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function Login() {
    console.log(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }
  return (
    <div>
      <Header />
      <h1 className="mt-2">Login Page</h1>
      <div className="col-sm-6 offset-sm-3 mt-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <Button className="mt-2" variant="dark" onClick={Login}>
          Login
        </Button>
      </div>
      <Footer />
    </div>
  );
}
