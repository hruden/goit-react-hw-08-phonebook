import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { NavLink } from 'react-router-dom';
import { selectError} from 'redux/auth/selectors';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandler = e => {
    setName(e.target.value.trim());
  };
  const emailHandler = e => {
    setEmail(e.target.value.trim());
  };
  const passwordHandler = e => {
    setPassword(e.target.value.trim());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // const form = e.currentTarget;
    if (password.length <= 7) {
      toast.error('Password length must be 8 or more symbols');
      return;
    }
    const newUser = { name, email, password };
    try {
      await dispatch(register(newUser));
      if(isError){
        toast.error('User with that email or password is already exist');
          return;
      }
      if(!isError){
        toast.success('Register successfull')
        return
      }
    } catch (error) {
      console.log(error);
    }
    // form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Username"
            value={name}
            onChange={nameHandler}
            required
          />
        </Form.Group>

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
          Sing up
        </Button>
      </Form>
      <Card.Text>
        Already have an account?
        <NavLink to="/login"> Log In</NavLink>
      </Card.Text>
    </>
  );
};
