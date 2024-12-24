/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
// eslint-disable-next-line no-unused-vars
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState('off');
  // eslint-disable-next-line no-unused-vars
  const cart = fakeCart;

  function handlePriority(state) {
    console.log(state)
    const checkState= state ? 'on': 'off';
    setWithPriority(checkState)
  }

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* from react router dom */}
      {/* <Form method="POST" action="/order/new"> */}

      {/* 
        - So notice how this entire form right here works complitely without any
        javaScript and and without OnSubmit handler for example. 
        - So all we have is this Form here and then react router takes care of 
        the rest we also didn't have to create any state variables here for each of 
        these input fields and didn't even create a loading state. so react router 
        will do all of these automatically without us having to do anything. 
        - The idea behind all these is to basically allow us to go back to the 
        basics so to the way HTML used to work back in the day before everyone 
        starting using JavaScript for the frontend. 
        - So back then we simply created HTML FORM similar to this one and then 
        when we submited a request was send to the server which then did to work. 
       */}
      <Form method="POST">  
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => handlePriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <button>Order now</button>
        </div> 
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData= await request.formData();
  const data= Object.fromEntries(formData);
  // console.log(data);

  const order= {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  }

  const newOrder =  await createOrder(order);


  /*
    - we want to do is to immediatly redirect the page to the order/:id
    basically showing the user the information about that new order. 
    - we can't do it using the navigate function because it comes from calling
    the useNavigate() hook but we can not call hooks inside this function so hooks 
    can only to be called inside components.
    - And so here we need to use another function which is called "redirect()" 
    - so this is basically another function that's provided to us by react router 
    which basically will just create a new response or a new request.  
  */ 

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
