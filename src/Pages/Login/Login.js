import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data, e) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("Login successfully.");

        e.target.reset();
        setLoginError("");
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  return (
    <section className="h-[600px] flex justify-center items-center">
      <div className="w-96 shadow-lg p-5 rounded">
        <h2 className="text-2xl text-center font-bold">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <label role="alert" className=" text-red-600 font-mono">
                {errors.email?.message}
              </label>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-mono">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <label role="alert" className="text-red-600 font-mono">
                {errors.password?.message}
              </label>
            )}
            <label className="label">
              <span className="label-text font-mono">Forgot Password?</span>
            </label>
          </div>

          <div className="form-control max-w-xs mx-auto">
            <input className="btn btn-accent" type="submit" value="login" />
          </div>
          <div className="max-w-xs mx-auto">{loginError && <p className="text-red-600 font-mono">{loginError}</p>}</div>
        </form>
        <p className="max-w-xs my-2 mx-auto">
          New to Doctors Portal ?<Link className="text-secondary ml-2 ">Create new account</Link>{" "}
        </p>
        <div className="divider max-w-xs mx-auto">OR</div>
        <div className="max-w-xs my-2 mx-auto">
          <button className="btn btn-accent btn-outline w-full">
            CONTINUE WITH GOOGLE <FaGoogle className="ml-3 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
