import React from "react";
import { useSelector } from "react-redux";

export default function LoginOnly({ element }) {
  const { login } = useSelector((state) => state.auth);
  return login && login.email ? element : "UnAuthorised Access";
}
