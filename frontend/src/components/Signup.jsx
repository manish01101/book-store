import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Signup = () => {
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
        <h2 className="font-semibold pb-2">Please Signup</h2>

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
              Signup
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium pt-4 text-sm">
          Have an account? Please{" "}
          <Link to={"/signin"} className="text-blue-500">
            Signin
          </Link>
        </p>
        {/* google signin method */}
        <div className="pt-4">
          <button
            onClick={handleGoogleSignin}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle />
            Signup with Google
          </button>
        </div>
        <p className="pt-3 text-center text-gray-500 text-sm">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Signup;
