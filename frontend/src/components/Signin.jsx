import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleGoogleSignin = () => {

  }
  return (
    <div className="h-90vh flex justify-center items-center h-screen">
      <div className="flex flex-col bg-gray-100 p-5 border rounded-[10px]">
        <h2 className="font-semibold pb-2">Please Signin</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelName={"Email"}
            labelFor={"email"}
            inputType={"email"}
            placeholder={"Email Address"}
            {...register("email", { required: true })}
          />
          <Input
            labelName={"Password"}
            labelFor={"password"}
            inputType={"password"}
            placeholder={"Password"}
            {...register("password", { required: true })}
          />
          {message && (
            <p className="text-red-500 text-xs italic pb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none">
              Signin
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium pt-4 text-sm">
          Haven't an account? Please{" "}
          <Link to={"/signup"} className="text-blue-500">
            Register
          </Link>
        </p>
        {/* google signin method */}
        <div className="pt-4">
          <button onClick={handleGoogleSignin} className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            <FaGoogle />
            Signin with Google
          </button>
        </div>
        <p className="pt-3 text-center text-gray-500 text-sm">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Signin;
