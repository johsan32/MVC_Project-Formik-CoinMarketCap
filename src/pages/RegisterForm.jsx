import { useFormik } from "formik";
import { schema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();
  if (user) {
    navigate("/coins");
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: schema,

    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      signUser(values);
      actions.resetForm();
      navigate("/coins");
    },
  });

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
        <h3>Register</h3>
        <form onSubmit={formik.handleSubmit} className="form outline-none">
          <div className="form_group field">
            <input
              name="email"
              id="name"
              placeholder="Email"
              value={formik.values.email}
              className={formik.errors.email && formik.touched.email && "error"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
            <label htmlFor="name" className="form_label">
              Email
            </label>
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div className="form_group field">
            <input
              name="age"
              id="age"
              placeholder="Age"
              className={formik.errors.age && formik.touched.age && "error"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
            />{" "}
            <label htmlFor="age" className="form_label">
              Age
            </label>
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
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

          <div className="form_group field">
            <input
              name="confirmPassword"
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              placeholder="Password Again"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              id="control"
            />
            <label htmlFor="control" className="form_label">
              Password Again
            </label>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>

          <div className="check-wrapper">
            <div className="check">
              <input
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="checkbox"
                id="terms"
              />

              <label htmlFor="terms"> I have read and accept the terms</label>
            </div>

            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>

          <button disabled={formik.isSubmitting} type="submit">
            Register
          </button>
        </form>
      </div>
      <img className="footer" src="/footer.png" alt="" />
    </div>
  );
};

export default RegisterForm;
