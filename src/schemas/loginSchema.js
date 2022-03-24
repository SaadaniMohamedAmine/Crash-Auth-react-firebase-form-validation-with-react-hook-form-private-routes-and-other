import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("The email is required.").required(),
  password: yup
    .string()
    .required("The password is required.")
    .min(6, "The mail must contain four caracters minimum.")
    .max(10, "The password should not be more than ten caracters."),
  confirmPassword: yup
    .string()
    .required("You must confirm password.")
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password does not match."
    ),
});
export default schema;
