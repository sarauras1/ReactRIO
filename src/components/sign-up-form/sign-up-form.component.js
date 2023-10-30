import { Fragment, useState } from "react";
import Button from "../button/button.component";
import {
  createAuthUserwithEmailAndPassword,
  createUserDocFromAuthForm,
} from "../../utils/firebase.utils";
import InputForm from "../formInput/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const clearForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const { name, email, password, confirmPassword } = formFields;
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("the password is not matching");
      return;
    }
    try {
      const { user } = await createAuthUserwithEmailAndPassword(
        email,
        password
      );
     console.log(user)
      await createUserDocFromAuthForm(user, name);
     
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      id: 1,
      label: "Enter your name",
      type: "text",
      required: true,
      value: `${name}`,
      name: "name",
      onChange: handleChange,
    },
    {
      id: 2,
      label: "Enter your email",
      type: "email",
      required: true,
      value: `${email}`,
      name: "email",
      onChange: handleChange,
    },
    {
      id: 3,
      label: "Enter your password",
      type: "password",
      required: true,
      value: `${password}`,
      name: "password",
      onChange: handleChange,
    },
    {
      id: 4,
      label: "Confirm your password",
      type: "password",
      required: true,
      value: `${confirmPassword}`,
      name: "confirmPassword",
      onChange: handleChange,
    },
  ];
  return (
    <Fragment>
    
        <div className="signup-form-container">
          <h2>Don't have an account?</h2>
          <span>Sign up with this form</span>
          <form onSubmit={handleSubmit}>
            {formData.map(
              ({ id, label, type, required, value, name, onChange }) => (
                <InputForm
                  key={id}
                  label={label}
                  type={type}
                  required={required}
                  value={value}
                  name={name}
                  onChange={onChange}
                />
              )
            )}
            <Button type="submit">Sign up</Button>
          </form>
        </div>
      
    </Fragment>
  );
}
