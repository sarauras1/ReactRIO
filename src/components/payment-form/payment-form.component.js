import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { Fragment } from 'react';
import "./payment.styles.scss";
import Button from '../button/button.component';
export default function PaymentForm(){
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
    }
    return<Fragment>
        
   <div className='payment-container'>
   <form className='payment-form'>
       <CardElement/>
       <Button buttonType={"inverted"}>Pay Now</Button>
    </form>
   </div>
      
       
        
    </Fragment>
}