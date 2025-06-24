"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface Type {
  email: string;
  password: string;
}

const Basic = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0D1117] via-[#1E293B] to-[#0D1117]">
    <div className="bg-[#161B22] p-8 rounded-xl shadow-lg w-96">
      <h1 className="text-white text-2xl font-semibold text-center mb-6">
        Sign In
      </h1>
      <Formik<Type>
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Partial<Type> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#0D1117] text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-[#0D1117] text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default Basic;
