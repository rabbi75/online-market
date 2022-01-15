import React from "react";
// import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <div className="fixed-bottom" bg="dark" variant="dark">
        <p class="text-center client">
          Copyright © 2022{" "}
          <a href="https://rabbi75.github.io/Protfolio/" target="_blank">
            {" "}
            Golam Rabbi.
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
