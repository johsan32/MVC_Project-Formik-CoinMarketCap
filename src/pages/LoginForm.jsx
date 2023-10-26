import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { schemaLogin } from "./schema";

const LoginForm = () => {
  const { login } = useContext(UserContext);

  const formik = useFormik({
    validationSchema: schemaLogin,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (values) {
        login(values.email, values.password);
      } else {
        console.log("hata");
      }
    },
  });

  console.log(formik);
  return (
    <div className="login">
      <div className="container">
        <div className="img-div">
          <Link to="/">
            <img
              src="intro.png"
              alt=""
              style={{ height: "150px", alignSelf: "center" }}
            />
          </Link>
        </div>
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit} className="form outline-none">
          <div className="form_group field">
            <input
              name="email"
              id="name"
              placeholder="Email"
              type="text"
              value={formik.values.email}
              className={formik.errors.email && formik.touched.email && "error"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="name" className="form_label">
              Email or User Name
            </label>
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div className="form_group field">
            <input
              name="password"
              placeholder="Password"
              className={
                formik.errors.password && formik.touched.password && "error"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              id="password"
            />
            <label htmlFor="password" className="form_label">
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Login
          </button>
        </form>
      </div>
      <img className="footer" src="/footer.png" alt="" />
    </div>
  );
};

export default LoginForm;
