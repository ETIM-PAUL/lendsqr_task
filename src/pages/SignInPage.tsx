import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "../assets/logo.svg"
import sideImage from "../assets/login_image.svg"
import "../scss/Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

//types for react hook form
type FormValues = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [passwordVisibilty, setPasswordVisibilty] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    if (typeof window !== 'undefined') {
      let password = document.getElementById("password") as HTMLInputElement
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }
    setPasswordVisibilty(!passwordVisibilty)
  }

  //Error Handling
  const schema = yup
    .object({
      email: yup.string().email().required().label("Email"),
      password: yup.string().required().label("Password"),
    })
    .required();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // OnSubmit Login Form, Do This
  const onSubmit = async (data: object) => {
    setIsLoading(true)
    setTimeout(() => {
      dispatch({
        type: "LOGIN",
        payload: true,
      });
      navigate(`/users`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="">
      <div className="company_logo">
        <img src={logo} alt="company_logo" />
      </div>
      <div className="login_div">

        <img src={sideImage} alt="side_img" className="side_img" />

        <div className="login_outer_component">
          <div className="login_inner_component averi">
            <span className="login_heading">Welcome!</span>
            <span className="login_sub_heading">Enter details to login.</span>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form"
            >
              <div className="input_div">
                <input
                  type="email"
                  required
                  {...register("email")}
                  placeholder="Email"
                  className="input_field" />
                {errors?.email && <p className="error">{errors.email.message}</p>}
              </div>

              <div className="input_div">
                <div className="password_div">
                  {!passwordVisibilty ?
                    <span onClick={() => togglePasswordVisibility()} className="password_visibility">Show</span> :
                    <span onClick={() => togglePasswordVisibility()} className="password_visibility">Hide</span>
                  }
                  <input
                    id="password"
                    type="password"
                    // required
                    placeholder="Password"
                    {...register("password")}
                    className={`input_field ${errors?.password && errors.password.message && "error"}`} />
                  {errors?.password && <p className="error">{errors.password.message}</p>}
                </div>
              </div>
              <Link to="/forgot_password" className="forgot_password_div">
                <span className="forgot_password">forgot password?</span>
              </Link>
              <button
                disabled={isLoading}
                type="submit"
                className="submit_btn loginButton"
              >
                {isLoading ? <span className="spinner" id="spinner"></span> : "LOG IN"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage