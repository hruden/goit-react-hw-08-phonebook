import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const isError = useSelector(selectError);
  const isLogedIn = useSelector(selectIsLoggedIn)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = e => {
    setEmail(e.target.value.trim());
  };
  const passwordHandler = e => {
    setPassword(e.target.value.trim());
  };
 const reset = ()=>{
  setEmail('')
  setPassword('')
 }
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { email, password };

    try {
      await dispatch(logIn(user));
      if(isLogedIn === false){
        toast.error('User with that email or password is does not exist');
        reset();
          return;
      }
      if(isLogedIn === true){
        toast.success('Login successful')
        return
      }
    } catch (error) {
      console.log(error);
    }   
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <Card.Text>
        Not a member?
        <NavLink to="/register"> Sign up</NavLink>
      </Card.Text>
    </>
  );
};
