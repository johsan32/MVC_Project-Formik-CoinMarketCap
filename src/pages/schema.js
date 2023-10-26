import * as yup from "yup";

const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
const mailUser = "johsan";
const passwordUser = "Ab-1234";
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required field"),
  age: yup
    .number()
    .positive()
    .min(18, "People under 18 cannot enter")
    .max(65, "You cannot be over 65 years of age")
    .required("Required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, "Please enter a stronger password")
    .required("Required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Required field"),
  terms: yup
    .boolean()
    .isTrue("You cannot continue without accepting the terms."),
});
export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Required field")
    .matches(mailUser, "Please check your username/mail or password"),
  password: yup
    .string()
    .required("Required field")
    .matches(passwordUser, "Please check your username/mail or password"),
});
