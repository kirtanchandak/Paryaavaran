import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

function LoginScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <div>
      <Layout title="Login">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="font-bold text-xl mb-4">Login</h1>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="font-bold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoFocus
              className="border ring-green-200 focus:ring rounded"
              {...register("email", { required: "Please Enter Email" })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoFocus
              className="border mr-1 ring-green-200 focus:ring rounded"
              {...register("password", {
                required: "Please Enter Password",
                minLength: {
                  value: 6,
                  message: "password should be more than 5 characters",
                },
              })}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="mt-4">
            <button className="primary-btn">Login</button>
          </div>
          <h1 className="font-bold mt-3">
            Don&apos;t have an account? &nbsp;
            <Link href="/register">Register</Link>
          </h1>
        </form>
      </Layout>
    </div>
  );
}

export default LoginScreen;
