import { useDispatch, useSelector} from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { LoginFormStyled } from './LoginForm.styled';
import { selectIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsLoading);


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
      await dispatch(logIn(user)).then(({ payload }) =>
      payload.user
        ? toast.success('Login successful')
        : toast.error('User with that email or password is does not exist')
    );
    } catch (error) {
      console.log(error);
    }
    reset()   
  };
  return (
    <>
      <LoginFormStyled onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" disabled={isLoading ? true : false}>
          Log In
        </Button>
      </LoginFormStyled>
      <Card.Text>
        Not a member?
        <NavLink to="/register"> Sign up</NavLink>
      </Card.Text>
    </>
  );
};
