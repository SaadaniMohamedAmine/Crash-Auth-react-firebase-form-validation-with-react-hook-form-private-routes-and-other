import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("The email is required.").required(),
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password does not match."
    ),
});
export default schema;
