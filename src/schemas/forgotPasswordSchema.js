import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .email("The email must be in a valid format !!")
    .required("The email must be required."),
});
export default schema;
