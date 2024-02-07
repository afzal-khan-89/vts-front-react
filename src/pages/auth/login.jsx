import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { companyLogo } from "../../assets";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log("Form submitted with values:", values);

      // Reset the form after submission
      // resetForm();
    },
  });
  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcom Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please login to your account
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <img src={companyLogo} className="h-[60px]" />
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* <input type="hidden" name="remember" value="true" /> */}
          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm font-bold text-gray-700 tracking-wide"
            >
              Email
            </label>
            <input
              className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              placeholder="Enter your email address"
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-8 content-center">
            <label
              htmlFor="password"
              className="text-sm font-bold text-gray-700 tracking-wide"
            >
              Password
            </label>
            <input
              className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-500 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Log in
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Dont have an account?</span>
            <Link
              to="/register"
              className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
