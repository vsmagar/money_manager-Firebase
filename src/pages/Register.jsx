import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../redux/action/authAction";

export default function Register() {
  const { login } = useSelector((state) => state.auth);
  const actionDispatch = useDispatch();
  const handleLoginWithGoogle = async (e) => {
    actionDispatch(loginWithGoogle());
  };
  const navigate = useNavigate();

  const image =
    "https://images.unsplash.com/photo-1675679620439-bacfc67a669a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  var backgroundImage = {
    backgroundImage: `url(${image})`,
  };

  useEffect(() => {
    if (login) {
      navigate("/account");
    }
  }, [login]);

  return (
    <>
      <div style={backgroundImage} class="container  img-fluid ">
        <img alt="" srcset="" />
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <button
              onClick={handleLoginWithGoogle}
              type="button"
              class="btn btn-primary my-5 rounded-5"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
