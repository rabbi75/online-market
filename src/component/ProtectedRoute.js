import React from "react";

export default function ProtectedRoute({ props }) {
  let Cmp = props.Cmp;
  return (
    <div>
      <Cmp />
    </div>
  );
}
