import { Fragment, useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss"

import {
  signInWithGooglePopup,
  SignInAuthUserwithEmailAndPassword
} from '../../utils/firebase.utils';
const defaultFormFields = {
 
  email: "",
  password: "",
 
};
export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const clearForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const { email, password } = formFields;



  const signInWithGoogle = async () => {
       await signInWithGooglePopup();
      
  };
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const {user} = await SignInAuthUserwithEmailAndPassword(
        email,
        password
      );

   
      clearForm()
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert("incorrect password for email");
          break
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break
            default: console.log(error)
      }
    }
  }
  return (
    <Fragment>
      <div className="signin-form-cantainer">
        <form onSubmit={handleSubmit}>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <FormInput
            label="Enter your email"
            type="email"
            required
            value={email}
            name="email"
            onChange={handleChange}
          />
          <FormInput
            label="Enter your password"
            type="password"
            required
            value={password}
            name="password"
            onChange={handleChange}
          />
          <div className="buttons-container">
          <Button type="submit" buttonType="inverted">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign In with Google
          </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
