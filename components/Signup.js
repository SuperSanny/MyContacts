import { signupFields } from "../src/constants";
import { useState } from "react";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    const { username, email, password, confirmPassword } = signupState;
    e.preventDefault();
    try {
      // fetch(process.env.API_BASE_URL + "/api/users/register", {
      //   method: "POST",
      //   crossDomain: true,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     username,
      //     email,
      //     password,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log("User Registered"));
      if (password !== confirmPassword) {{
        console.log("Password is not match");
      }
      console.log("User Registered");
    } catch (error) {
      console.log(error);
    }
    // console.log(signupState);
    createAccount();
  };
  const createAccount = () => {};

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </form>
    </>
  );
};

export default Signup;
